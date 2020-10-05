import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalQuizRowComponent } from './eternal-quiz-row.component';

describe('EternalQuizRowComponent', () => {
  let component: EternalQuizRowComponent;
  let fixture: ComponentFixture<EternalQuizRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternalQuizRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalQuizRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
