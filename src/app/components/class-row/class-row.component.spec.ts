import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRowComponent } from './class-row.component';

describe('ClassRowComponent', () => {
  let component: ClassRowComponent;
  let fixture: ComponentFixture<ClassRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
