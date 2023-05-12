import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiResponse {
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) {

  }

  resetSeatsBooked(movieName: string): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`http://localhost:3000/admin/reset-seats-booked`, {
      movieName
    })
  }

  getMovieNames(): Observable<[{ name: string }]> {
    return this.httpClient.get<[{ name: string }]>(`http://localhost:3000/movies/names`)
  }


}
