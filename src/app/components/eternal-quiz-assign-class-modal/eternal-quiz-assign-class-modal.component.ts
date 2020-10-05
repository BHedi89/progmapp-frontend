import {Component, OnInit} from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizAssignToClass} from '../../interfaces/quiz-assign-to-class';
import {Class} from '../../interfaces/class';
import {Semester} from '../../enum/semester.enum';
import {ClassService} from '../../services/class.service';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-eternal-quiz-assign-class-modal',
  templateUrl: './eternal-quiz-assign-class-modal.component.html',
  styleUrls: ['./eternal-quiz-assign-class-modal.component.scss']
})
export class EternalQuizAssignClassModalComponent implements OnInit {

  textShow: boolean;
  quizId: string;
  class: Class;
  classes: Class[];

  constructor(private quizService: EternalQuizService, private classService: ClassService, private route: ActivatedRoute,
              private router: Router) {
    this.class = {
      id: '',
      year: null,
      semester: Semester.spring,
      isActive: true,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quiz;
    });
    // TODO validate quiz id from url
    this.classService.getClasses().subscribe(resp => this.classes = resp);
  }

  assignClass(): void {
    this.quizService.assignQuizToClass(this.quizId, this.class).subscribe(() => {
      this.router.navigateByUrl('/teacher-class-page');
    });
  }

}
