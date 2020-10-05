import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleAnswerOrdercodeSimpleComponent } from './possible-answer-ordercode-simple.component';

describe('PossibleAnswerOrdercodeSimpleComponent', () => {
  let component: PossibleAnswerOrdercodeSimpleComponent;
  let fixture: ComponentFixture<PossibleAnswerOrdercodeSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleAnswerOrdercodeSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleAnswerOrdercodeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
