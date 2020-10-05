import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {LoginService} from '../../services/login.service';
import {Roles} from '../../enum/roles.enum';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser$: Observable<User>;

  constructor(private router: Router, private loginService: LoginService) {
    this.currentUser$ = this.loginService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  get isAdmin$(): Observable<boolean> {
    return this.currentUser$.pipe(map( u => !! u.roles.find( r => r.name === Roles.admin ) ));
  }

  get isOffice$(): Observable<boolean> {
    return this.currentUser$.pipe(map( u => !! u.roles.find( r => r.name === Roles.office ) ));
  }

  get isTeacher$(): Observable<boolean> {
    return this.currentUser$.pipe(map( u => !! u.roles.find( r => r.name === Roles.teacher ) ));
  }

  get isStudent$(): Observable<boolean> {
    return this.currentUser$.pipe(map( u => !! u.roles.find( r => r.name === Roles.student ) ));
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }
}
