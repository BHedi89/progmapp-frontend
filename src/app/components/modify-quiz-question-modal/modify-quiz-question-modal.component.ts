import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-quiz-question-modal',
  templateUrl: './modify-quiz-question-modal.component.html',
  styleUrls: ['./modify-quiz-question-modal.component.scss']
})
export class ModifyQuizQuestionModalComponent implements OnInit {

  options = {
    placeholderText: 'Kérdés szövege...',
    charCounterCount: false,
    attribution: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  generateNewAnswer(): void {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
      <input>
      <input type="checkbox">
      <label>Jó válasz</label>
      <input type="checkbox">
      <label>Rossz válasz</label>`;
    document.getElementsByClassName('answers')[0].appendChild(createDiv);
  }
}
