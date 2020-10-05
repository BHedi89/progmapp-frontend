import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEternalquizModalComponent } from './new-eternalquiz-modal.component';

describe('NewEternalquizModalComponent', () => {
  let component: NewEternalquizModalComponent;
  let fixture: ComponentFixture<NewEternalquizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEternalquizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEternalquizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
