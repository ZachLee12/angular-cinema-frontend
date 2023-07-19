import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { Credentials } from 'src/app/feature/accounts/components/login/interfaces';
import jwtDecode from 'jwt-decode';
import { UserProfile, VerifyTokenResponse } from './interfaces';
import { mockUserProfile } from './mocks';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userProfile$: BehaviorSubject<UserProfile> = new BehaviorSubject(mockUserProfile);

  constructor(private httpClient: HttpClient) { }

  initLoginFlow$(): Observable<UserProfile | any> {
    return this.httpClient.get(`http://localhost:3000/protected/verifyRefreshToken`, { headers: new HttpHeaders({ 'refreshtoken': (this.getRefreshToken() as string) }) }).pipe(
      switchMap((response: any) => {
        try {
          const accessToken: string = this.getAccessToken() ?? ''
          const { firstname, lastname, username, age, id } = jwtDecode(accessToken) as UserProfile
          const userProfile = { firstname, lastname, username, age, id }
          this.setUserProfile$(userProfile)
          this.setIsLoggedIn$(true)
          return of(response.message as VerifyTokenResponse)
        } catch (err) {
          return throwError(() => 'not logged in')
        }
      }),
      catchError((err: HttpErrorResponse) => throwError(() => err.error.error))
    )
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

  setTokens(tokens: Tokens, rememberMe: boolean = false) {
    localStorage.setItem('accessToken', tokens.accessToken)
    if (rememberMe) {
      localStorage.setItem('refreshToken', tokens.refreshToken)
    }
  }

  login(credentials: Credentials): Observable<Tokens> {
    const httpBody = { username: credentials.username, password: credentials.password }
    return this.httpClient.post<Tokens>(`http://localhost:3000/auth/login`, httpBody)
  }

  logout(): Observable<Tokens> {
    return this.httpClient.get<Tokens>(`http://localhost:3000/auth/logout`)
  }

}
