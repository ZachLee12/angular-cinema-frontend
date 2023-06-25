import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor(private httpClient: HttpClient) { }

  login() {
    const httpBody = { username: 'zachlee123', password: 'iLoveSushi%' }
    return this.httpClient.post<{ accessToken: string }>(`http://localhost:3000/auth/login`, httpBody)
  }
}
