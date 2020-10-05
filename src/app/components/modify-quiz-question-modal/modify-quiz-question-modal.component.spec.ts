import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyQuizQuestionModalComponent } from './modify-quiz-question-modal.component';

describe('ModifyQuizQuestionModalComponent', () => {
  let component: ModifyQuizQuestionModalComponent;
  let fixture: ComponentFixture<ModifyQuizQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyQuizQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyQuizQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
