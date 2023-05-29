import { Component } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie, MovieListResponse } from '../interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  unsubscribe$: Subject<void> = new Subject();
  movieList!: Movie[]

  constructor(private movieService: MovieService) {

  }

  getMovieList(): void {
    this.movieService.getMovieList().pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {
      this.movieList = data
    })
  }

  ngOnInit() {
    this.getMovieList()
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
