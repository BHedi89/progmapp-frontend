import {Component, Input, OnInit} from '@angular/core';
import {Class} from '../../interfaces/class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-class-row]',
  templateUrl: './class-row.component.html',
  styleUrls: ['./class-row.component.scss']
})

export class ClassRowComponent implements OnInit {

  @Input()
  classesName: Class;

  constructor() { }

  ngOnInit(): void {
  }

}
