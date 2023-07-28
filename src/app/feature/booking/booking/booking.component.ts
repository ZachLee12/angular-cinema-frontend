import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, Subject, combineLatestWith, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { Movie } from '../../movie/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { SeatData } from '../seats/interfaces';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Apollo, gql } from 'apollo-angular';

const GET_MOVIES = gql`
  {
    movies{
      name,
      imgUrlVertical
    }
  }
`

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

  unsubscribe: Subject<void> = new Subject();

  currentRouteParams$?: Observable<Params>;
  currentMovie$!: Observable<Movie>;
  hallInfo$?: Observable<any>;
  seatsBooked: SeatData[] = [];
  currentUser: any;

  graphQLMovies?: Observable<any>;


  ngOnInit() {
    this.movieService.getOneMovie$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72")
      .pipe(
        tap(movie => { this.movieService.setCurrentMovie$(movie) })
      ).subscribe()

    this.currentMovie$ = this.movieService.getCurrentMovie$()

    this.hallInfo$ = this.movieService.getCurrentHall$()
    this.loginService.getTokenUserProfile$().subscribe(
      {
        next: userProfile => {
          console.log(userProfile)
          this.currentUser = userProfile
        }
      }
    )
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

  testGraphQLCall() {
    this.apolloService.watchQuery({
      query: GET_MOVIES,
    }).valueChanges.pipe(map(result => {
      console.log(result)
    })).subscribe()
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
