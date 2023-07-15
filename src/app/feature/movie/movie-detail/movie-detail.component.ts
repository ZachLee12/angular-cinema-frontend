import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Movie } from '../interfaces';
import { mockMovie } from '../mock-movies';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movieService: MovieService = inject(MovieService)
  selectedMovie$: Observable<Movie> = of(mockMovie)




}
