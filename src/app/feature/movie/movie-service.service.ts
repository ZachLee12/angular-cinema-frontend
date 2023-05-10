import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { Movie, MovieListResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //change any[] to a movie interface
  // movies$: Observable<any[]>;

  constructor(private httpClient: HttpClient) {

  }

  //replace any with movie
  getMovieList(): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>("http://localhost:3000/movies")
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`http://localhost:3000/movies/${id}`)
  }

  updateMovieBooking(movieId: any, seatsBooked: any): void {
    this.httpClient.post(`http://localhost:3000/booking`, {
      movieId,
      seatsBooked
    }).subscribe(response => console.log(`Post request successful: ${response}`))
  }
}
