import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalQuizAssignClassModalComponent } from './eternal-quiz-assign-class-modal.component';

describe('EternalQuizAssignClassModalComponent', () => {
  let component: EternalQuizAssignClassModalComponent;
  let fixture: ComponentFixture<EternalQuizAssignClassModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternalQuizAssignClassModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalQuizAssignClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
