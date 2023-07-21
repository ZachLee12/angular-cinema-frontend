import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../../../feature/movie/interfaces';
import { mockMovie } from 'src/app/feature/movie/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  currentMovie$: BehaviorSubject<Movie> = new BehaviorSubject(mockMovie);

  httpClient: HttpClient = inject(HttpClient)


  makeBooking(movieId: string, showtime: string, seats: number[]) {
    // this.httpClient.post
  }

  getMovieHalls$(movieId: string, showtime: string) {
    return this.httpClient.get(`http://localhost:3000/booking/hall/${movieId}/${showtime}`)
  }

  setCurrentMovie$(movie: Movie): void {
    this.currentMovie$.next(movie)

  }

  getCurrentMovie$(): Observable<Movie> {
    return this.currentMovie$.asObservable();
  }

  //replace any with movie
  getMovies$(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:3000/movies")
  }

  getOneMovie$(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`http://localhost:3000/movies/${id}`)
  }

  updateMovieBooking(movieId: any, numberOfSeatsBooked: any, seatsBooked: number[]): void {
    this.httpClient.post(`http://localhost:3000/booking`, {
      movieId,
      numberOfSeatsBooked,
      seatsBooked
    }).subscribe(response => console.log(`Post request successful: ${response}`))
  }
}
