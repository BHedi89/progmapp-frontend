import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassQuizRowComponent } from './class-quiz-row.component';

describe('ClassQuizRowComponent', () => {
  let component: ClassQuizRowComponent;
  let fixture: ComponentFixture<ClassQuizRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassQuizRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassQuizRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
