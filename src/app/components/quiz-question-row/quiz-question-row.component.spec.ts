import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionRowComponent } from './quiz-question-row.component';

describe('QuizQuestionRowComponent', () => {
  let component: QuizQuestionRowComponent;
  let fixture: ComponentFixture<QuizQuestionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
