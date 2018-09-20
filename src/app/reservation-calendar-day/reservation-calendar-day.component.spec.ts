import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCalendarDayComponent } from './reservation-calendar-day.component';

describe('ReservationCalendarDayComponent', () => {
  let component: ReservationCalendarDayComponent;
  let fixture: ComponentFixture<ReservationCalendarDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCalendarDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCalendarDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
