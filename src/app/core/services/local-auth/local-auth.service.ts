import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor(private httpClient: HttpClient) { }

  login(): Observable<Tokens> {
    const httpBody = { username: 'zachlee123', password: 'iLoveSushi%' }
    return this.httpClient.post<Tokens>(`http://localhost:3000/auth/login`, httpBody)
  }

  logout(): Observable<Tokens> {
    return this.httpClient.get<Tokens>(`http://localhost:3000/auth/logout`)
  }
}
