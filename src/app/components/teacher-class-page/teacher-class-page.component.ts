import { Component, OnInit } from '@angular/core';
import {ClassEternalQuiz} from '../../interfaces/class-eternal-quiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';

@Component({
  selector: 'app-teacher-class-page',
  templateUrl: './teacher-class-page.component.html',
  styleUrls: ['./teacher-class-page.component.scss']
})
export class TeacherClassPageComponent implements OnInit {

  filter: string;
  quizWithClass: ClassEternalQuiz[];

  constructor(private eternalQuizService: EternalQuizService) {
    this.quizWithClass = [];
  }

  ngOnInit(): void {
    this.eternalQuizService.getQuizWithClass().subscribe(
      classes => this.quizWithClass = classes
    );
  }
}
