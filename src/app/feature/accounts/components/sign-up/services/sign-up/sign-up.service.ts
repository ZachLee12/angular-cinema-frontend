import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  httpClient: HttpClient = inject(HttpClient)

  signUp(createUser: CreateUser) {
    const user = {
      ...createUser,
      age: new Date().getFullYear() - new Date(createUser.birthday).getFullYear(),
      movies: {
        liked: [],
        watched: []
      }
    }

    return this.httpClient.post(`http://localhost:3000/protected/users`, user)
  }
}
