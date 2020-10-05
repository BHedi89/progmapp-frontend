import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Class} from '../interfaces/class';
import {ClassResponse} from '../interfaces/class-response';
import {Student} from '../interfaces/student';
import {StudentService} from './student.service';
import {StudentResponse} from '../interfaces/student-response';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private readonly SERVER_URL = environment.serverUrl + 'class';
  private classes: BehaviorSubject<Class[]>;
  private class: Class[];

  constructor(private http: HttpClient, private studentService: StudentService) {
    this.classes = new BehaviorSubject([]);
    this.class = [];
  }

  addClass(e: Class): void {
    this.http.post<ClassResponse>(
      this.SERVER_URL,
      e,
      { withCredentials: true }
    ).subscribe(resp => this.updateClasses(resp));
  }

  private updateClasses(response: ClassResponse): void {
    if (response.success) {
      this.classes.next(response.class);
    }
  }

  getClasses(): Observable<Class[]> {
    const params = new HttpParams({
      fromObject: {
        active: 'true',
      }
    });

    this.http.get<Class[]>(this.SERVER_URL + '?' + params)
      .subscribe(resp => {
        this.classes.next(resp);
      });
    return this.classes.asObservable();
  }

  // TODO use class id in the router
  assignStudent(s: Student): Observable<StudentResponse> {
    return this.http.put<StudentResponse>(
      this.SERVER_URL + '/progmatic2020-ősz/students',
      {idList: s.loginName},
      {withCredentials: true})
      .pipe(tap (resp => this.studentService.updateStudent(resp)));
  }

  checkClassExistence(id: string): boolean {
    return this.class.some(classId => classId.id.includes(id));
  }
}
