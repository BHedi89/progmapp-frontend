import { Component, OnInit } from '@angular/core';
import {Roles} from '../../enum/roles.enum';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  roles = [];

  user: User;
  textShow: boolean;

  constructor(private userService: UserService) {
    this.user = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: [],
    };
    this.roles = Object.keys(Roles).map(r => ({ id: r, name: r }));
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.userService.addUser(this.user);
    this.textShow = true;
  }
}
