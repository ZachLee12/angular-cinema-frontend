import { Component } from '@angular/core';
import { MovieService } from '../../../core/services/movie/movie-service.service';
import { Movie } from '../interfaces';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})

export class MoviePageComponent {

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
  }

}
