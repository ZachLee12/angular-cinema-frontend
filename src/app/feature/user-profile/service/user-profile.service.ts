import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

const GET_USER = gql`
  query GetUsers($username: String!){
    user(username: $username){
        id,
        firstname,
        lastname,
        username,
        birthday,
        age
    }
  }
`

const GET_USERBOOKING = gql`
    query GetUserBookingWithUserId($userId: String!){
      userBookingsWithUserId(userId: $userId){
        hall{
          showtime
        },
        movie{
          id,
          name,
        }
      }
    }
`

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  httpClient: HttpClient = inject(HttpClient)
  apolloService: Apollo = inject(Apollo)

  ngOnInit() {
    console.log('helo')
  }

  getUserProfile$(username: string) {
    return this.apolloService.query(
      {
        query: GET_USER,
        variables: { username },
        fetchPolicy: 'network-only'
      }
    ).pipe(map((result: any) => result.data.user))
  }

  getUserBookings$(userId: string) {
    return this.apolloService.query(
      {
        query: GET_USERBOOKING,
        variables: { userId },
        fetchPolicy: 'network-only'
      }
    ).pipe(map((result: any) => result.data.userBookingsWithUserId))
  }
}
