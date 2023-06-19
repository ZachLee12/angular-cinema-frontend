import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


  addMovie$(time: string, name: string, numberofseats: number, imageBase64: string) {

  }

  deleteMovie$(name: string) {

  }
}
