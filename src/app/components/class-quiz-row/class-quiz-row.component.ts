import {Component, Input, OnInit} from '@angular/core';
import {ClassEternalQuiz} from '../../interfaces/class-eternal-quiz';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-class-quiz-row]',
  templateUrl: './class-quiz-row.component.html',
  styleUrls: ['./class-quiz-row.component.scss']
})
export class ClassQuizRowComponent implements OnInit {

  @Input()
  quizWithClass: ClassEternalQuiz;

  constructor() { }

  ngOnInit(): void {
  }

}
