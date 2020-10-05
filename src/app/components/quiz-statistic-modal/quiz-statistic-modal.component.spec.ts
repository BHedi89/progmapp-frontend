import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStatisticModalComponent } from './quiz-statistic-modal.component';

describe('QuizStatisticModalComponent', () => {
  let component: QuizStatisticModalComponent;
  let fixture: ComponentFixture<QuizStatisticModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizStatisticModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStatisticModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
