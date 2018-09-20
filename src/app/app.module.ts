import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ArchwizardModule} from 'angular-archwizard';

import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeSe from '@angular/common/locales/sv';

import {AppComponent} from './app.component';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {CdkTableModule} from '@angular/cdk/table';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {ReservationComponent} from './reservation/reservation.component';
import {reservationReducer, ReservationEffects} from './reservation/reservation.effects';
import {ReservationService} from './reservation/reservation.service';
import {CategoryComponent} from './category/category.component';
import {ReservationCalendarComponent} from './reservation-calendar/reservation-calendar.component';
import {BookableComponent} from './bookable/bookable.component';
import {ReservationCalendarWeekComponent} from './reservation-calendar-week/reservation-calendar-week.component';
import {ReservationTicketComponent} from './reservation-ticket/reservation-ticket.component';
import {ReservationCalendarDayComponent} from './reservation-calendar-day/reservation-calendar-day.component';

registerLocaleData(localeSe, 'se');

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    CategoryComponent,
    ReservationCalendarComponent,
    BookableComponent,
    ReservationCalendarWeekComponent,
    ReservationTicketComponent,
    ReservationCalendarDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    ArchwizardModule,
    StoreModule.forRoot({
      reservation: reservationReducer
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ReservationEffects]),

    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    NoopAnimationsModule,

    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [ReservationService, {provide: LOCALE_ID, useValue: 'se-SE'}],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:3000'}),
      cache: new InMemoryCache()
    });
  }
}
