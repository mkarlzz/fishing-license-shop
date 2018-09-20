import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTicketComponent } from './reservation-ticket.component';

describe('ReservationTicketComponent', () => {
  let component: ReservationTicketComponent;
  let fixture: ComponentFixture<ReservationTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
