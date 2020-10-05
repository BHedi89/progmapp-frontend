import { Component, OnInit } from '@angular/core';
import {EternalQuizControllerService, EternalQuizStatisticDTO} from '../../../../build/openapi';

@Component({
  selector: 'app-eq-statistics',
  templateUrl: './eq-statistics.component.html',
  styleUrls: ['./eq-statistics.component.scss']
})
export class EqStatisticsComponent implements OnInit {
  statistics: EternalQuizStatisticDTO;

  constructor(private eqService: EternalQuizControllerService) { }

  ngOnInit(): void {
    this.refresh();
  }

  public refresh(): void{
    this.eqService.getMyEternalQuizStatistics().subscribe(
      value => {
        this.statistics = value;
        this.statistics.achievedPercentage = Number(this.statistics.achievedPercentage.toFixed(2));
      }
    );
  }

}
