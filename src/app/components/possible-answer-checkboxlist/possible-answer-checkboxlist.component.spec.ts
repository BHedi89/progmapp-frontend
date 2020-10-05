import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleAnswerCheckboxlistComponent } from './possible-answer-checkboxlist.component';

describe('PossibleAnswerCheckboxlistComponent', () => {
  let component: PossibleAnswerCheckboxlistComponent;
  let fixture: ComponentFixture<PossibleAnswerCheckboxlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleAnswerCheckboxlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleAnswerCheckboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
