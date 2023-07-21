import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, combineLatestWith, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { Movie } from '../../movie/interfaces';
import { ActivatedRoute, Params } from '@angular/router';

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
  seats?: any[]

  //dummy Array for Angular template to loop through to generate seats
  tenElementsArray: any[] = new Array(10).fill('')
  sevenElementsArray: any[] = new Array(7).fill('')

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
        tap((combinedData: any) => this.getArrayForHallSizeToSeats(combinedData.hallSize))
      )

  }

  getArrayForHallSizeToSeats(hallSize: string): any[] {
    let numOfSeats;
    let seatsArray: any[] = []
    switch (hallSize) {
      case 'BIG':
        numOfSeats = 75
        break
      case 'MEDIUM':
        numOfSeats = 50
        break
      case 'SMALL':
        numOfSeats = 25
        break
      default:
        numOfSeats = 0
    }
    for (let i = 0; i < numOfSeats; i++) {
      seatsArray.push({ seatId: i, booked: false, selected: false })
    }
    this.seats = seatsArray
    return seatsArray
  }
}
