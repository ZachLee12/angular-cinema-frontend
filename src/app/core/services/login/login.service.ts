import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { Credentials } from 'src/app/feature/login/interfaces';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) { }

  initLoginFlow$(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/testConnection`)
  }

  getIsLoggedIn$() {
    return this.isLoggedIn$.asObservable()
  }

  emitIsLoggedIn$(bool: boolean) {
    this.isLoggedIn$.next(bool)
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
