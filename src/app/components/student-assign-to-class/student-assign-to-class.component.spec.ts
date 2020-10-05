import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignToClassComponent } from './student-assign-to-class.component';

describe('StudentAssignToClassComponent', () => {
  let component: StudentAssignToClassComponent;
  let fixture: ComponentFixture<StudentAssignToClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAssignToClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssignToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
