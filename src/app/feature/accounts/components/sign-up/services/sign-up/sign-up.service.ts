import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreateUser } from '../../interfaces';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  httpClient: HttpClient = inject(HttpClient)

  signUp(createUser: CreateUser) {
    const user = {
      ...createUser,
      age: new Date().getFullYear() - new Date(createUser.birthday).getFullYear(),
    }

    return this.httpClient.post(`http://localhost:3000/protected/users`, user)
  }

}
