import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCalendarWeekComponent } from './reservation-calendar-week.component';

describe('ReservationCalendarWeekComponent', () => {
  let component: ReservationCalendarWeekComponent;
  let fixture: ComponentFixture<ReservationCalendarWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCalendarWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCalendarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
