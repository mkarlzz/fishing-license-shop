import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, createFeatureSelector, createSelector} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {ReservationService} from './reservation.service';
import {Category, Ticket} from './reservation.model';

export interface ReservationState {
  categories: Array<Category>;
  selectedCategories: Array<Category>;
  tickets: Array<Ticket>;
  selectedTickets: Array<Ticket>;
  month: Date;
}

export const LOAD_CATEGORIES = '[Categories] Load Categories';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';

export class LoadCategories implements Action {
  readonly type = LOAD_CATEGORIES;

  constructor(public payload: string) {
  }
}

export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: any) {
  }
}

export const LOAD_TICKETS = '[Tickets] Load Tickets';
export const LOAD_TICKETS_SUCCESS = '[Tickets] Load Tickets Success';

export class LoadTickets implements Action {
  readonly type = LOAD_TICKETS;

  constructor(public payload: any) {
  }
}

export class LoadTicketsSuccess implements Action {
  readonly type = LOAD_TICKETS_SUCCESS;

  constructor(public payload: any) {
  }
}

export const SET_MONTH = 'SET MONTH';

export class SetMonth implements Action {
  readonly type = SET_MONTH;

  constructor(public payload: Date) {
  }
}


export type ReservationAction = LoadCategories | LoadCategoriesSuccess | LoadTickets | LoadTicketsSuccess | SetMonth;

class ReservationDefaultState implements ReservationState {
  categories = [];
  selectedCategories = [];
  tickets = [];
  selectedTickets = [];
  month = new Date();
}

export function reservationReducer(state: ReservationState = new ReservationDefaultState,
                                   action: ReservationAction): ReservationState {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
       return {
        ...state,
        categories: action.payload
      };

    case LOAD_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload
      };

    case SET_MONTH:
      console.log(action.payload);
      return {
        ...state,
        month: new Date(action.payload.getTime())
      };

  }
  return state;
}


@Injectable()
export class ReservationEffects {
  @Effect()
  loadCategories$ = this.actions$
    .ofType(LOAD_CATEGORIES)
    .switchMap(() => this.reservationService.loadCategories().map((res: any) => (new LoadCategoriesSuccess(res))).catch(err => Observable.of({
      type: 'FAILURE',
      payload: err
    })));

  @Effect()
  loadTickets$ = this.actions$
    .ofType(LOAD_TICKETS)
    .switchMap((action: LoadTickets) => this.reservationService.loadTickes(action.payload).map((res: any) => (new LoadTicketsSuccess(res))).catch(err => Observable.of({
      type: 'FAILURE',
      payload: err
    })));


  constructor(private actions$: Actions,
              private reservationService: ReservationService) {
  }
}

export const ticketsResponse = (state: ReservationState) => state.tickets;
export const monthResponse = (state: ReservationState) => {
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeee: " + state.month);
  return state.month;
}

export const reservationStateSelector = createFeatureSelector<ReservationState>('reservation');
export const ticketsSelector = createSelector(reservationStateSelector, ticketsResponse);
export const monthSelector = createSelector(reservationStateSelector, monthResponse);
