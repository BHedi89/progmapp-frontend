import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEternalquizModalComponent } from './modify-eternalquiz-modal.component';

describe('ModifyEternalquizModalComponent', () => {
  let component: ModifyEternalquizModalComponent;
  let fixture: ComponentFixture<ModifyEternalquizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEternalquizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEternalquizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
