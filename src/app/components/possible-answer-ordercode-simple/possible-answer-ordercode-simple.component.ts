import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {PossibleAnswerDTO, PossibleAnswerResponseDTO} from '../../../../build/openapi';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-possible-answer-ordercode-simple',
  templateUrl: './possible-answer-ordercode-simple.component.html',
  styleUrls: ['./possible-answer-ordercode-simple.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerOrdercodeSimpleComponent}]

})
export class PossibleAnswerOrdercodeSimpleComponent extends PossibleAnswerResponseProvider implements OnInit {

  @Input() possibleAnswer: PossibleAnswerDTO;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getSelectedAnswers(): PossibleAnswerResponseDTO {
    const ret: PossibleAnswerResponseDTO  = {
      id: this.possibleAnswer.id,
      selectedAnswerIds: new Array()
    };
    for (const possibleAnswerValue of this.possibleAnswer.possibleAnswerValues) {
      ret.selectedAnswerIds.push(possibleAnswerValue.id);
    }
    return ret;
  }

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event.previousIndex);
    moveItemInArray(this.possibleAnswer.possibleAnswerValues, event.previousIndex, event.currentIndex);
  }

}
