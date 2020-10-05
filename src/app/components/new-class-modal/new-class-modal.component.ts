import {Component, OnInit} from '@angular/core';
import {Class} from '../../interfaces/class';
import {ClassService} from '../../services/class.service';
import {Semester} from '../../enum/semester.enum';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  class: Class;
  classes: Class[];
  textShow: boolean;

  constructor(private classService: ClassService) {
    this.class = {
      id: '',
      year: null,
      semester: Semester.spring,
      isActive: true,
    };
    this.classes = [];
  }

  ngOnInit(): void {
  }

  saveClass(): void {
    this.classService.addClass(this.class);
  }

  checkClass(): void {
    this.textShow = this.classService.checkClassExistence(this.class.id);
  }

  submit(): void {
    this.saveClass();
    this.checkClass();
  }
}
