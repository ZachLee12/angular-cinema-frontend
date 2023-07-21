import { Component, inject } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Movie } from '../../movie/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

enum HallSize {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL"
}

@Component({
  selector: 'app-hall-selection',
  templateUrl: './hall-selection.component.html',
  styleUrls: ['./hall-selection.component.scss']
})
export class HallSelectionComponent {
  movieService: MovieService = inject(MovieService)
  activatedRouteService: ActivatedRoute = inject(ActivatedRoute)
  routerService: Router = inject(Router)

  selectedMovie$!: Observable<Movie>;
  halls$!: Observable<any>;

  ngOnInit() {
    // this.movieService.getOneMovie$("8c6e9f31-f5e4-4c2a-be26-99ad1204ba72")
    //   .pipe(
    //     tap(movie => { this.movieService.setCurrentMovie$(movie) })
    //   ).subscribe()

    this.selectedMovie$ = this.movieService.getCurrentMovie$()
    this.halls$ = this.activatedRouteService.params
      .pipe(switchMap(({ movieId, showtime }) => this.movieService.getMovieHalls$(movieId, showtime)))
  }

  navigateToSeatsBooking(hallSize: HallSize) {
    const queryParams = { hallSize }
    this.routerService.navigate([`${this.routerService.url}`, 'seats'], { queryParams })
  }

}
