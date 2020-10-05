import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MustMatch} from '../_password-validator/must-match.validator';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  registrationSuccess = false;
  error: '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      token: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthDate: ['', Validators.required]
    });
  }

  get f(): any { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(data => { this.registrationSuccess = true; this.router.navigateByUrl('/login'); },
        error => { alert(error); });
  }
}
