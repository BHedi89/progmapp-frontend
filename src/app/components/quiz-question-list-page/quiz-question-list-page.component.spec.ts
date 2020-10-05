import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionListPageComponent } from './quiz-question-list-page.component';

describe('QuizQuestionListPageComponent', () => {
  let component: QuizQuestionListPageComponent;
  let fixture: ComponentFixture<QuizQuestionListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
