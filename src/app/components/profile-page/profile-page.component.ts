import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ProfileService} from '../../services/profile.service';
import {Observable} from 'rxjs';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  currentUser$: Observable<User>;

  constructor(private profileService: ProfileService, private loginService: LoginService) {
    this.user = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: []
    };
    this.currentUser$ = this.loginService.getCurrentUser();
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      user => { this.user = user.user;
      }
    );
  }
}
