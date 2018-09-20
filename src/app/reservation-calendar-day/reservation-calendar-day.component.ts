import {Component, OnInit, Input} from '@angular/core';
import {monthSelector, ReservationState, ticketsSelector} from '../reservation/reservation.effects';
import {Observable} from '../../../node_modules/rxjs';
import {Ticket} from '../reservation/reservation.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-reservation-calendar-day',
  templateUrl: './reservation-calendar-day.component.html',
  styleUrls: ['./reservation-calendar-day.component.scss']
})

export class ReservationCalendarDayComponent implements OnInit {

  @Input() day: Date = new Date();

  tickets$: Observable<Array<Ticket>> = this.store.select(ticketsSelector);

  month$: Observable<Date> = this.store.select(monthSelector);

  dayTickets: Array<Ticket> = [];

  constructor(private store: Store<ReservationState>) {
  }

  ngOnInit() {
    this.tickets$.subscribe((tickets: any) => {
      this.dayTickets = tickets.filter((t: Ticket) => {
        return Number(t.date).valueOf() == this.day.getTime();
      });
    });
  }
}
