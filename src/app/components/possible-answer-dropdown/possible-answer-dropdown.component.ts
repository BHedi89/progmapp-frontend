import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerDTO, PossibleAnswerResponseDTO, PossibleAnswerValueDTO} from '../../../../build/openapi';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';

@Component({
  selector: 'app-possible-answer-dropdown',
  templateUrl: './possible-answer-dropdown.component.html',
  styleUrls: ['./possible-answer-dropdown.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerDropdownComponent}]
})
export class PossibleAnswerDropdownComponent extends PossibleAnswerResponseProvider implements OnInit {
  @Input() possibleAnswer: PossibleAnswerDTO;
  selectedPoValue: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getSelectedAnswers(): PossibleAnswerResponseDTO{
    const ret: PossibleAnswerResponseDTO  = {
      id: this.possibleAnswer.id,
      selectedAnswerIds: this.selectedPoValue ? new Array(this.selectedPoValue) : new Array()
    };
    return ret;
  }


}
