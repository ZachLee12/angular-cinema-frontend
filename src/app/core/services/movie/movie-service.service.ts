import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Movie } from '../../../feature/movie/interfaces';
import { mockMovie } from 'src/app/feature/movie/mock-movies';
import { Hall, UserBooking } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  currentMovie$: BehaviorSubject<Movie> = new BehaviorSubject(mockMovie);
  currentHall$: BehaviorSubject<any> = new BehaviorSubject(null)

  httpClient: HttpClient = inject(HttpClient)

  getMovieHalls$(movieId: string, showtime: string): Observable<Hall[]> {
    return this.httpClient.get<Hall[]>(`http://localhost:3000/hall/${movieId}/${showtime}`)
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

  makeBooking(userBooking: any): Observable<UserBooking> {
    return this.httpClient.post<UserBooking>(`http://localhost:3000/booking`, userBooking)
  }

  getOneMovieHall$(hallId: string): Observable<Hall> {
    return this.httpClient.get<Hall>(`http://localhost:3000/hall/${hallId}`)
  }

  setCurrentHall$(hall: Hall) {
    this.currentHall$.next(hall)
  }

  getCurrentHall$(): Observable<Hall> {
    return this.currentHall$.asObservable()
  }
}
