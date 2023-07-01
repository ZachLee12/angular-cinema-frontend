import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { Credentials } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

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

  login(credentials: Credentials): Observable<Tokens> {
    const httpBody = { username: credentials.username, password: credentials.password }
    return this.httpClient.post<Tokens>(`http://localhost:3000/auth/login`, httpBody)
  }

  logout(): Observable<Tokens> {
    return this.httpClient.get<Tokens>(`http://localhost:3000/auth/logout`)
  }

}
