import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user';
import {UsersResponse} from '../interfaces/users-response';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly SERVER_URL = environment.serverUrl;

  public currentUser = new BehaviorSubject<User>(null);
  private csrfToken: string;

  constructor(private http: HttpClient) {
    this.fetchCurrentUser();
    this.csrfToken = '';
    this.fetchCsrf().subscribe(x => {
      console.log(x);
    });

    this.currentUser.subscribe(u => console.log(u));
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.currentUser.pipe(map(u => u !== null));
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  fetchCurrentUser(): void{
    this.http.get<User>(
      this.SERVER_URL + 'me',
      {withCredentials: true}
    ).subscribe(u => this.setLoggedIn(u) ); // TODO fix problem
  }

  getCsrf(): string {
    return this.csrfToken;
  }

  fetchCsrf(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL +  'csrf', { responseType: 'text' as 'json', withCredentials: true })
      .pipe(tap( csrf => {
        this.csrfToken = csrf;
      } ));
  }

  setLoggedIn(currentUser: User): void {
    this.currentUser.next(currentUser);
  }

  logIn(username: string, password: string): Observable<object> {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);
    this.fetchCsrf();
    return this.http.post<object>(
      this.SERVER_URL + 'login',
      fd,
      { withCredentials: true },
    ).pipe(
      tap(u => this.setLoggedIn(u as User)),
      tap( () => this.fetchCsrf().subscribe(() => {}) )
    );
  }

  logout(): void {
    this.currentUser.next(null);
  }
}
