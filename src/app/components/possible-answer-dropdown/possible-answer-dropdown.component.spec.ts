import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleAnswerDropdownComponent } from './possible-answer-dropdown.component';

describe('PossibleAnswerDropdownComponent', () => {
  let component: PossibleAnswerDropdownComponent;
  let fixture: ComponentFixture<PossibleAnswerDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleAnswerDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleAnswerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
