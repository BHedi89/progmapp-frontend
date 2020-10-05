import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {PossibleAnswerDTO, PossibleAnswerResponseDTO} from '../../../../build/openapi';

@Component({
  selector: 'app-possible-answer-checkboxlist',
  templateUrl: './possible-answer-checkboxlist.component.html',
  styleUrls: ['./possible-answer-checkboxlist.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerCheckboxlistComponent}]

})
export class PossibleAnswerCheckboxlistComponent extends PossibleAnswerResponseProvider implements OnInit {

  @Input() possibleAnswer: PossibleAnswerDTO;
  selectedPoValues: Array<string> = new Array();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getSelectedAnswers(): PossibleAnswerResponseDTO{
    const ret: PossibleAnswerResponseDTO  = {
      id: this.possibleAnswer.id,
      selectedAnswerIds: this.selectedPoValues
    };
    return ret;
  }

  checkBoxChanged(event): void{
    const id = event.target.value;
    const index = this.selectedPoValues.indexOf(id, 0);
    if (event.target.checked){
      if (index === -1){
        this.selectedPoValues.push(event.target.value);
      }
    }
    else{
      if (index !== -1){
        this.selectedPoValues.splice(index, 1);
      }
    }
  }

}
