import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqStatisticsComponent } from './eq-statistics.component';

describe('EqStatisticsComponent', () => {
  let component: EqStatisticsComponent;
  let fixture: ComponentFixture<EqStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
