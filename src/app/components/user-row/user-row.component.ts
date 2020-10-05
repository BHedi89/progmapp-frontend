import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
