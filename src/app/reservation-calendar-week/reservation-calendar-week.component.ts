import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[reservation-calendar-week]',
  templateUrl: './reservation-calendar-week.component.html',
  styleUrls: ['./reservation-calendar-week.component.scss']
})
export class ReservationCalendarWeekComponent implements OnInit {

  @Input() dayOfMonth: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  weekNr () {
    var date = new Date(this.dayOfMonth.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);

    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
      - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  dateDay(index: number) {
    let d = new Date(this.dayOfMonth.getTime());
    d.setDate(this.dayOfMonth.getDate() + index);
    return d;
  }
}
