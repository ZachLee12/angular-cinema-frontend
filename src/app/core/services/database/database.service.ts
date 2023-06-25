import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/feature/movie/interfaces';

interface ApiResponse {
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) {

  }

  resetSeatsBooked$(movieName: string): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`http://localhost:3000/admin/reset-seats-booked`, {
      movieName
    })
  }

  getMovies$(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`http://localhost:3000/movies`)
  }

  getUser$() {
    const header = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('jwt')}` })
    return this.httpClient.get(`http://localhost:3000/testProtected`, { headers: header })
  }
}
