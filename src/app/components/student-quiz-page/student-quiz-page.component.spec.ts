import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuizPageComponent } from './student-quiz-page.component';

describe('StudentQuizPageComponent', () => {
  let component: StudentQuizPageComponent;
  let fixture: ComponentFixture<StudentQuizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuizPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
