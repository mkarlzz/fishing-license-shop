import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ReservationState, LoadCategories, LoadTickets} from './reservation.effects';
import {FormGroup} from '@angular/forms';

interface AppState {
  reservation: ReservationState;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selectedCats: Array<Number> = [];

  reservation$: Observable<ReservationState> = this.store.select(s => s.reservation);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadCategories(''));
    this.reservation$.subscribe(console.log);
  }

  selectedCat(id: number): boolean {
    return this.selectedCats.find((s: number) => s === id) != undefined;
  }

  selectCat(id: number) {
    if (this.selectedCat(id)) {
      let i = this.selectedCats.indexOf(id);
      this.selectedCats.splice(i, 1);
    }
    else
      this.selectedCats.push(id);

    this.store.dispatch(new LoadTickets(this.selectedCats));
  }
}
