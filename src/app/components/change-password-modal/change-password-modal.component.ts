import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ChangePassword} from '../../interfaces/change-password';
import {Student} from '../../interfaces/student';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {

  password: ChangePassword;
  textShow: boolean;
  form: FormGroup;
  submitted = false;
  error = '';
  student: Student;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]]
    });
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): boolean {
    if (this.form.valid) {
      this.userService.modifyUser();
    } else {
      return false;
    }
  }
}
