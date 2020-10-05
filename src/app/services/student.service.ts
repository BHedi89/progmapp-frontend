import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Student} from '../interfaces/student';
import {HttpClient, HttpParams} from '@angular/common/http';
import {StudentResponse} from '../interfaces/student-response';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly SERVER_URL = environment.serverUrl + 'student';
  private readonly SERVER_URL2 = environment.serverUrl + 'user';
  private student: BehaviorSubject<Student[]>;

  constructor(private http: HttpClient) {
    this.student = new BehaviorSubject([]);
  }

  addStudent(s: Student): void {
    this.http.post<StudentResponse>(
      this.SERVER_URL,
      s,
      { withCredentials: true }
    ).subscribe(resp => this.updateStudent(resp));
  }

  updateStudent(response: StudentResponse): void {
    if (response.success) {
      this.student.next(response.student);
    }
  }

  getStudents(): Observable<Student[]> {
    const params = new HttpParams({
      fromObject: {
        student: 'true',
      }
    });

    this.http.get<Student[]>(this.SERVER_URL2 + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.student.next(resp);
      });
    return this.student.asObservable();
  }
}
