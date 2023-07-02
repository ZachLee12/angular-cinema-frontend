import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { Credentials } from 'src/app/feature/login/interfaces';
import jwtDecode from 'jwt-decode';
import { UserProfile } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userProfile$: Subject<UserProfile> = new Subject();

  constructor(private httpClient: HttpClient) { }

  initLoginFlow$(): Observable<UserProfile | string> {
    try {
      const accessToken: string = this.getAccessToken() ?? ''
      const { firstname, lastname, username, age } = jwtDecode(accessToken) as UserProfile
      const userProfile = { firstname, lastname, username, age }
      this.setUserProfile$(userProfile)
      this.setIsLoggedIn$(true)
      return of('login session maintained')
    } catch (err) {
      return throwError(() => 'not logged in')
    }

    // return this.httpClient.get(`http://localhost:3000/testConnection`)
  }

  getIsLoggedIn$() {
    return this.isLoggedIn$.asObservable()
  }

  setIsLoggedIn$(bool: boolean) {
    this.isLoggedIn$.next(bool)
  }

  setUserProfile$(userProfile: UserProfile): void {
    this.userProfile$.next(userProfile)
  }

  getUserProfile$(): Observable<UserProfile> {
    return this.userProfile$.asObservable()
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
