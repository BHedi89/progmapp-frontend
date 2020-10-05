import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' [app-quiz-question-row] ',
  templateUrl: './quiz-question-row.component.html',
  styleUrls: ['./quiz-question-row.component.scss']
})
export class QuizQuestionRowComponent implements OnInit {

  @Input()
  question: QuizQuestion;

  constructor() {
  }

  ngOnInit(): void {
  }

}
