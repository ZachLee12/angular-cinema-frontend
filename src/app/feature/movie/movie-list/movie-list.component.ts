import { Component } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie, MovieListResponse } from '../interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movieList!: Movie[]

  constructor(private movieService: MovieService) {

  }

  getMovieList(): void {
    this.movieService.getMovieList().subscribe((data: any) => {
      this.movieList = data
    })
  }

  ngOnInit() {
    this.getMovieList()
  }
}
