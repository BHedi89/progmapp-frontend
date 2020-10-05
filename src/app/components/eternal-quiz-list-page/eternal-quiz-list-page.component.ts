import {Component, OnInit} from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {ClassEternalQuiz} from '../../interfaces/class-eternal-quiz';

@Component({
  selector: 'app-forever-quiz-list-page',
  templateUrl: './eternal-quiz-list-page.component.html',
  styleUrls: ['./eternal-quiz-list-page.component.scss']
})
export class EternalQuizListPageComponent implements OnInit {

  filter: string;
  quizzes: ClassEternalQuiz[];

  constructor(private quizService: EternalQuizService) {
    this.quizzes = [];
  }

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe(
      quiz => this.quizzes = quiz
    );
  }
}
