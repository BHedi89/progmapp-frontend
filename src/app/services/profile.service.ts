import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserResponse} from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly SERVER_URL = environment.serverUrl + 'me';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.SERVER_URL, {withCredentials: true});
  }
}
