import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  student: Student;
  textShow: boolean;

  constructor(private studentService: StudentService) {
    this.student = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      classes: []
    };
  }

  ngOnInit(): void {
  }

  saveStudent(): void {
    this.studentService.addStudent(this.student);
  }
}
