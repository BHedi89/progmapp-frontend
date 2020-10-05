import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffClassPageComponent } from './staff-class-page.component';

describe('StaffClassPageComponent', () => {
  let component: StaffClassPageComponent;
  let fixture: ComponentFixture<StaffClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
