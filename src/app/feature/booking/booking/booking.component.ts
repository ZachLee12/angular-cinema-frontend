import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable } from 'rxjs'
import { Movie } from '../../movie/interfaces';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  movieService: MovieService = inject(MovieService)
  currentMovie$!: Observable<Movie>;

  ngOnInit() {
    this.currentMovie$ = this.movieService.getCurrentMovie$()
  }
}
