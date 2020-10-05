import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  filter: string;
  users: User[];
  students: Student[];

  constructor(private modalService: NgbModal, private studentService: StudentService, private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => { this.users = users;
      }
    );
    this.studentService.getStudents().subscribe(students => this.students = students);
  }
}
