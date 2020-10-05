import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassPageComponent } from './teacher-class-page.component';

describe('TeacherClassPageComponent', () => {
  let component: TeacherClassPageComponent;
  let fixture: ComponentFixture<TeacherClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
