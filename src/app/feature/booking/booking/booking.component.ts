import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, switchMap, tap } from 'rxjs'
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

  currentMovie$!: Observable<Movie>;
  currentRouteParams$?: Observable<Params>;
  halls$?: Observable<any>;

  ngOnInit() {
    // this.movieService.getOneMovie$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72")
    //   .pipe(
    //     tap(movie => { this.movieService.setCurrentMovie$(movie) })
    //   ).subscribe()

    this.currentMovie$ = this.movieService.getCurrentMovie$()

  }
}
