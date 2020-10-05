import {Component, OnInit} from '@angular/core';
import {Class} from '../../interfaces/class';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-new-class-page',
  templateUrl: './staff-class-page.component.html',
  styleUrls: ['./staff-class-page.component.scss']
})

export class StaffClassPageComponent implements OnInit {

  filter: string;
  classes: Class[];

  constructor(private classService: ClassService) {
    this.classes = [];
  }

  ngOnInit(): void {
    this.classService.getClasses().subscribe(
      classes => this.classes = classes
    );
  }
}
