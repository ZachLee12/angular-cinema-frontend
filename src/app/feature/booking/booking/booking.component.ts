import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, combineLatestWith, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { Movie } from '../../movie/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { SeatData } from '../seats/interfaces';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  movieService: MovieService = inject(MovieService)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  currentRouteParams$?: Observable<Params>;
  currentMovie$!: Observable<Movie>;
  hallInfo$?: Observable<any>;
  seatsBooked?: SeatData[];

  ngOnInit() {
    this.movieService.getOneMovie$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72")
      .pipe(
        tap(movie => { this.movieService.setCurrentMovie$(movie) })
      ).subscribe()

    this.currentMovie$ = this.movieService.getCurrentMovie$()
    this.hallInfo$ = this.activatedRoute.params
      .pipe(
        combineLatestWith(this.activatedRoute.queryParams),
        map(([params, queryParams]) => {
          return {
            ...params,
            ...queryParams
          }
        }),
      )


  }

  updateSeatsBooked(event: SeatData[]) {
    this.seatsBooked = event
  }

  makeBooking() {
    this.movieService.makeBooking(this.seatsBooked).subscribe(console.log)
  }

}
