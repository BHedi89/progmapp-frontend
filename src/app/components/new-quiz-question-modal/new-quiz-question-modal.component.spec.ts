import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizQuestionModalComponent } from './new-quiz-question-modal.component';

describe('NewQuizQuestionModalComponent', () => {
  let component: NewQuizQuestionModalComponent;
  let fixture: ComponentFixture<NewQuizQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuizQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
