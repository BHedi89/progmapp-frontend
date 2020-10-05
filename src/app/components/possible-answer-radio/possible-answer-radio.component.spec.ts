import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleAnswerRadioComponent } from './possible-answer-radio.component';

describe('PossibleAnswerRadioComponent', () => {
  let component: PossibleAnswerRadioComponent;
  let fixture: ComponentFixture<PossibleAnswerRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleAnswerRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleAnswerRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
