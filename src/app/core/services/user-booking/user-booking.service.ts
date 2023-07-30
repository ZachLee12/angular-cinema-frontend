import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_USER_BOOKINGS_IN_ONE_HALL = gql`
  query GetUserBookingsInOneHall($hallId: String!){
    userBookingsInOneHall(hallId: $hallId){
      movie{
        name
      },
      seatsBooked{
        columnId,
        rowId
      }
    }
  }
`

@Injectable({
  providedIn: 'root'
})
export class UserBookingService {
  apolloService: Apollo = inject(Apollo)

  getUserBookingsInOneHall$(hallId: string) {
    return this.apolloService.query({
      query: GET_USER_BOOKINGS_IN_ONE_HALL,
      variables: { hallId }
    })
  }

}
