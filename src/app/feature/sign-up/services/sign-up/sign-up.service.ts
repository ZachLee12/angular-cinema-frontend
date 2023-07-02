import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  httpClient: HttpClient = inject(HttpClient)

  signUp(createUser: CreateUser) {
    this.httpClient.post(`http://localhost:3000/protected/users`, createUser)
  }
}
