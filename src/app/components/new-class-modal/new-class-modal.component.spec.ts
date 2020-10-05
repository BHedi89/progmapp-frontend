import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassModalComponent } from './new-class-modal.component';

describe('NewClassModalComponent', () => {
  let component: NewClassModalComponent;
  let fixture: ComponentFixture<NewClassModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
