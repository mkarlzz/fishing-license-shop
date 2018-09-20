import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Ticket} from './reservation.model';

@Injectable()
export class ReservationService {

  constructor(private apollo: Apollo) {
  }

  filterTicket(categories: Array<Number>, tickets: Array<Ticket>) {
    return tickets.filter((t:Ticket) => {
      return categories.find(c => c === t.Category.id) !== undefined;
    });
  }

  loadCategories() {
    return this.apollo.query({
      query: gql`{
      allCategories {
        id
        title
        color
      }
    }`
    }).map((res: any) => res.data.allCategories);
  }

  loadTickes(categories: Array<Number>) {
    return this.apollo.query({
      query: gql`{
      allTickets {
        id
        date
        Category{
          color
          id
        }
      }
    }`
    }).map((res: any) => this.filterTicket(categories, res.data.allTickets));
  }

}
