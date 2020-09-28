import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Eternalquiz} from '../interfaces/eternalquiz';
import {HttpClient} from '@angular/common/http';
import {EternalquizResponse} from '../interfaces/eternalquiz-response';
import {ClassEternalQuiz} from '../interfaces/class-eternal-quiz';
import {QuestionAssignToQuiz} from '../interfaces/question-assign-to-quiz';
import {QuizAssignToClass} from '../interfaces/quiz-assign-to-class';
import {QuizAssignToClassResponse} from '../interfaces/quiz-assign-to-class-response';
import {Statistic} from '../interfaces/statistic';
import {QuizQuestion} from '../interfaces/quiz-question';

@Injectable({
  providedIn: 'root'
})
export class EternalQuizService {

  private readonly SERVER_URL = environment.serverUrl + 'eternalquiz';
  private eternalQuiz: BehaviorSubject<Eternalquiz[]>;
  private classEternalQuiz: BehaviorSubject<ClassEternalQuiz[]>;
  private quizAssignToClass: BehaviorSubject<QuizAssignToClass[]>;
  private studentQuiz: BehaviorSubject<QuizQuestion[]>;

  constructor(private http: HttpClient) {
    this.eternalQuiz = new BehaviorSubject([]);
    this.classEternalQuiz = new BehaviorSubject([]);
    this.quizAssignToClass = new BehaviorSubject([]);
    this.studentQuiz = new BehaviorSubject([]);
  }

  getQuiz(): Observable<ClassEternalQuiz[]> {
    this.http.get<ClassEternalQuiz[]>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.classEternalQuiz.next(resp);
      });
    return this.classEternalQuiz.asObservable();
  }

  private updateQuizzes(response: EternalquizResponse): void {
    if (response.success) {
      this.eternalQuiz.next(response.quiz);
    }
  }

  addQuiz(q: Eternalquiz): void {
    this.http.post<EternalquizResponse>(
      this.SERVER_URL,
      q,
      { withCredentials: true }
    ).subscribe(resp => this.updateQuizzes(resp));
  }

  getQuizWithClass(): Observable<ClassEternalQuiz[]> {
    this.http.get<ClassEternalQuiz[]>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.classEternalQuiz.next(resp);
      });
    return this.classEternalQuiz.asObservable();
  }

  assignQuestionToQuiz(): void {
    this.http.put<EternalquizResponse>(this.SERVER_URL + '/quiz/question',
      {eternalQuizId: '',
            questionId: ''},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizzes(resp));
  }

  assignQuizToClass(): void {
    this.http.put<QuizAssignToClassResponse>(this.SERVER_URL + '/quiz/class',
      {eternalQuizId: '',
            schoolClassId: ''},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizToClass(resp));
  }

  private updateQuizToClass(response: QuizAssignToClassResponse): void {
    if (response.success) {
      this.quizAssignToClass.next(response.quizToClass);
    }
  }

  getStatistic(): Observable<Statistic> {
    return this.http.get<Statistic>(this.SERVER_URL + '/me/statistics', {withCredentials: true});
  }

  getStudentQuiz(): Observable<QuizQuestion[]> {
    this.http.get<QuizQuestion[]>(this.SERVER_URL + '/question',
      {withCredentials: true})
      .subscribe(resp => {
        this.studentQuiz.next(resp);
      });
    return this.studentQuiz.asObservable();
  }
}
