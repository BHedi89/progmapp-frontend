import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {PossibleAnswerDropdownComponent} from '../possible-answer-dropdown/possible-answer-dropdown.component';

@Component({
  selector: 'app-possible-answer-radio',
  templateUrl: './possible-answer-radio.component.html',
  styleUrls: ['./possible-answer-radio.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerRadioComponent}]
})
export class PossibleAnswerRadioComponent extends PossibleAnswerDropdownComponent implements OnInit {

}
