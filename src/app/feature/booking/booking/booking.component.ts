import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable } from 'rxjs'
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

  ngOnInit() {
    this.currentMovie$ = this.movieService.getCurrentMovie$()
    this.currentRouteParams$ = this.activatedRoute.params
  }
}
