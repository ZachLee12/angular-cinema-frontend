import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  httpClient: HttpClient = inject(HttpClient)

  signUp(createUser: CreateUser) {
    console.log(Number(new Date().getFullYear()) - Number(createUser.birthday.slice(0, 4)))
    const user = {
      ...createUser,
      age: Number(new Date().getFullYear()) - Number(createUser.birthday.slice(0, 4)),
      movies: {
        liked: [],
        watched: []
      }
    }

    return this.httpClient.post(`http://localhost:3000/protected/users`, user)
  }
}
