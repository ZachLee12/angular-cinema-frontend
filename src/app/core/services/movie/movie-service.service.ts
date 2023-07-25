import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Movie } from '../../../feature/movie/interfaces';
import { mockMovie } from 'src/app/feature/movie/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  currentMovie$: BehaviorSubject<Movie> = new BehaviorSubject(mockMovie);
  currentHall$: BehaviorSubject<any> = new BehaviorSubject(null)

  httpClient: HttpClient = inject(HttpClient)

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

  makeBooking(userBooking: any) {
    return this.httpClient.post(`http://localhost:3000/booking`, userBooking)
  }

  getOneMovieHall$(hallId: string) {
    return this.httpClient.get(`http://localhost:3000/booking/hall/${hallId}`)
  }

  setCurrentHall$(hall: any) {
    console.log(hall)
    this.currentHall$.next(hall)
  }

  getCurrentHall$(): Observable<any> {
    return this.currentHall$.asObservable()
  }
}
