import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, Subject, filter, switchMap, tap } from 'rxjs'
import { Movie } from '../../movie/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { SeatData } from '../seats/interfaces';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Apollo, gql } from 'apollo-angular';
import { UserBookingService } from 'src/app/core/services/user-booking/user-booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  movieService: MovieService = inject(MovieService)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  loginService: LoginService = inject(LoginService)
  apolloService: Apollo = inject(Apollo)
  userBookingService: UserBookingService = inject(UserBookingService)

  unsubscribe: Subject<void> = new Subject();

  currentRouteParams$?: Observable<Params>;
  currentMovie$!: Observable<Movie>;
  hallInfo$?: Observable<any>;
  seatsBooked: SeatData[] = [];
  userBookingsFromDatabase: SeatData[] = []
  currentUser: any;

  graphQLMovies?: Observable<any>;


  ngOnInit() {
    // //Just for development
    // this.movieService.getOneMovie$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72")
    //   .pipe(
    //     tap(movie => { this.movieService.setCurrentMovie$(movie) })
    //   ).subscribe()

    // //Just for development
    // this.movieService.getMovieHalls$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72", "08:00 AM")
    //   .pipe(
    //     tap(halls => { this.movieService.setCurrentHall$(halls[0]) })
    //   ).subscribe()

    this.currentMovie$ = this.movieService.getCurrentMovie$()

    this.loginService.getTokenUserProfile$().subscribe(
      {
        next: userProfile => {
          this.currentUser = userProfile
        }
      }
    )
    this.currentRouteParams$ = this.activatedRoute.params
    new Promise((resolve) => {
      this.hallInfo$ = this.movieService.getCurrentHall$()
      this.hallInfo$.pipe(filter(data => data !== null)).subscribe(
        {
          next: hall => {
            console.log(hall)
            resolve(hall)
          }
        }
      )
    })
      .then((hall: any) => {
        console.log('ran')
        console.log(hall)
        return this.userBookingService.getUserBookingsInOneHall$(hall.id)
      })
      .then(data => {
        console.log("data here:")
        console.log(data)
      })

    //   setTimeout(() => {
    //   this.hallInfo$!
    //     .pipe(
    //       switchMap(hall => {
    //         return this.userBookingService.getUserBookingsInOneHall$(hall.id)
    //       }
    //       ),
    //       tap((data: any[]) => {
    //         data.forEach(data => {
    //           this.userBookingsFromDatabase.push(data.seatsBooked)
    //         })
    //       })
    //     ).subscribe()
    // }, 100)
  }

  decodeURI(encodedURI: string) {
    return decodeURIComponent(encodedURI)
  }


  updateSeatsBooked(event: SeatData[]) {
    this.seatsBooked = event
  }

  makeBooking() {
    this.hallInfo$?.subscribe(
      {
        next: hall => {
          const booking = {
            hallId: hall.id,
            movieId: hall.movieId,
            userId: this.currentUser.id,
            seatsBooked: this.seatsBooked
          }
          this.movieService.makeBooking(booking).subscribe()
        }
      }
    )
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
