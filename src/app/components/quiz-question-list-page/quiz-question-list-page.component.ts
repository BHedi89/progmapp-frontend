import {Component, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {QuizQuestionService} from '../../services/quiz-question.service';


@Component({
  selector: 'app-quiz-question-list-page',
  templateUrl: './quiz-question-list-page.component.html',
  styleUrls: ['./quiz-question-list-page.component.scss']
})

export class QuizQuestionListPageComponent implements OnInit {

  filter: string;
  questions: QuizQuestion[];

  constructor(private quizQuestionService: QuizQuestionService) {
    this.questions = [];
  }

  ngOnInit(): void {
    this.quizQuestionService.getQuizQuestions().subscribe(
      question => { this.questions = question;
      }
    );
  }
}
