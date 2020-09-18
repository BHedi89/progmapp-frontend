import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {QuizQuestion} from '../interfaces/quiz-question';
import {HttpClient} from '@angular/common/http';
import {QuizQuestionResponse} from '../interfaces/quiz-question-response';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionService {

  private readonly SERVER_URL = environment.serverUrl + 'question';
  private quizQuestions: BehaviorSubject<QuizQuestion[]>;

  constructor(private http: HttpClient) {
    this.quizQuestions = new BehaviorSubject([]);
  }

  getQuizQuestion(): Observable<QuizQuestion[]> {
    this.http.get<QuizQuestion[]>(this.SERVER_URL + '/micimackokedvence', // + '/' + q.id
      {withCredentials: true})
      .subscribe(resp => {
        this.quizQuestions.next(resp);
      });
    return this.quizQuestions.asObservable();
  }

  private updateQuizQuestion(response: QuizQuestionResponse): void {
    if (response.success) {
      this.quizQuestions.next(response.quizQuestion);
    }
  }

  addQuizQuestion(q: QuizQuestion): void {
    this.http.post<QuizQuestionResponse>(
      this.SERVER_URL,
      {quizQuestion: q},
      { withCredentials: true }
    ).subscribe(resp => this.updateQuizQuestion(resp));
  }
}
