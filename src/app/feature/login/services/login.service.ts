import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { Credentials } from '../interfaces';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getUserProfile$(jwtToken: string): Observable<any> {
    return of(jwtDecode(jwtToken))
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

  refreshAccessToken$(): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/auth/refreshAccessToken`,
      {
        'refreshToken': localStorage.getItem('refreshToken')
      }
    ) as Observable<{ accessToken: string }>
  }

  setTokens(tokens: Tokens) {
    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
  }

  login(credentials: Credentials): Observable<Tokens> {
    const httpBody = { username: credentials.username, password: credentials.password }
    return this.httpClient.post<Tokens>(`http://localhost:3000/auth/login`, httpBody)
  }

  logout(): Observable<Tokens> {
    return this.httpClient.get<Tokens>(`http://localhost:3000/auth/logout`)
  }



}
