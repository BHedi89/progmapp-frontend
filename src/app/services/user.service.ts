import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {UsersResponse} from '../interfaces/users-response';
import {Student} from '../interfaces/student';
import {Register} from '../interfaces/register';
import {ChangePassword} from '../interfaces/change-password';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVER_URL = environment.serverUrl + 'user';
  private readonly SERVER_URL2 = environment.serverUrl;
  private users: BehaviorSubject<User[]>;
  private students: BehaviorSubject<Student[]>;
  psw: ChangePassword;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
    this.students = new BehaviorSubject([]);
  }

  register(reg: Register): any{
    return this.http.post(
      this.SERVER_URL2 + 'completeregistration', reg);
  }

  getUsers(): Observable<User[]> {
    const params = new HttpParams({
      fromObject: {
        student: '',
      }
    });

    this.http.get<User[]>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.users.next(resp);
      });
    return this.users.asObservable();
  }

  sendRegLink(): void {
    this.http.put<UsersResponse>(
      this.SERVER_URL + '/newreglink/nyilasypeter',
      {},
      {withCredentials: true}
    ).subscribe(resp => this.updateUsers(resp));
  }

  getStudents(): Observable<Student[]> {
    const params = new HttpParams({
      fromObject: {
        student: 'true',
      }
    });

    this.http.get<Student[]>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.students.next(resp);
      });
    return this.students.asObservable();
  }

  modifyStudent(): void {
    this.http.put<UsersResponse>(
      this.SERVER_URL2 + '/me',
      { psw: this.psw },
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  addUser(e: User): void {
    const user = { ...e, roles: e.roles.map(roleString => ({ name: roleString })) };
    this.http.post<UsersResponse>(
      this.SERVER_URL,
      user,
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  updateUsers(response: UsersResponse): void{
    if (response.success) {
      this.users.next(response.user);
    }
  }
}
