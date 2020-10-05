import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-foreverquiz-modal',
  templateUrl: './modify-eternalquiz-modal.component.html',
  styleUrls: ['./modify-eternalquiz-modal.component.scss']
})
export class ModifyEternalquizModalComponent implements OnInit {

  questions = [
    {id: 1, name: 'kérdés1'},
    {id: 2, name: 'kérdés2'},
  ];

  selectedQuestionIds: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
