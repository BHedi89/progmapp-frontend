import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalQuizListPageComponent } from './eternal-quiz-list-page.component';

describe('EternalQuizListPageComponent', () => {
  let component: EternalQuizListPageComponent;
  let fixture: ComponentFixture<EternalQuizListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternalQuizListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalQuizListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
