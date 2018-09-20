import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {monthSelector, ReservationState, SetMonth, ticketsSelector} from '../reservation/reservation.effects';
import {Observable} from '../../../node_modules/rxjs';
import {Ticket} from '../reservation/reservation.model';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss']
})

export class ReservationCalendarComponent implements OnInit {

  mondayArray: Array<Date>;

  month: Date;

  constructor(private store: Store<ReservationState>) {
    this.setMonth(2018, 6);
  }

  ngOnInit() {
  }

  incMonth() {
    this.setMonth(this.month.getFullYear(), this.month.getMonth() + 1);
  }

  decMonth() {
    this.setMonth(this.month.getFullYear(), this.month.getMonth() - 1);
  }


  setMonth(year: number, month: number) {
    this.store.dispatch(new SetMonth(new Date(year, month, 1)));
    this.month = new Date(year, month, 1);
    const firstDay = new Date(year, month, 1);

    while (firstDay.getDay() !== 1) {
      console.log(firstDay);
      firstDay.setDate(firstDay.getDate() - 1);
    }

    this.mondayArray = [];

    while(firstDay.getMonth() <= month) {
      this.mondayArray.push(new Date(firstDay.getTime()));
      firstDay.setDate(firstDay.getDate() + 7);
    }
  }
}
