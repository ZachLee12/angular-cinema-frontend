import { Component } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie, MovieListResponse } from '../interfaces';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})

export class MoviePageComponent {
  movieList?: Movie[];

  constructor(private movieService: MovieService) {

  }

}
