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
        age
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

  getUserProfile() {
    this.apolloService.watchQuery({
      query: GET_USER,
      variables: { username: 'zachlee123' }
    }).valueChanges.pipe(map(res => {
      console.log(res)
    })).subscribe()
  }
}
