import { Component, OnInit } from '@angular/core';
import {Statistic} from '../../interfaces/statistic';
import {EternalQuizService} from '../../services/eternal-quiz.service';

@Component({
  selector: 'app-quiz-statistic-modal',
  templateUrl: './quiz-statistic-modal.component.html',
  styleUrls: ['./quiz-statistic-modal.component.scss']
})
export class QuizStatisticModalComponent implements OnInit {

  statistic: Statistic;

  constructor(private statisticService: EternalQuizService) {
    this.statistic = {
      userId: '',
      nrOfAllQuestions: null,
      nrOfRightAnswers: null,
      nrOfBadAnswers: null,
      targetPercentage: null,
      achievedPercentage: null,
    };
  }

  ngOnInit(): void {
    this.statisticService.getStatistic().subscribe(
      stat => this.statistic = stat
    );
  }

}
