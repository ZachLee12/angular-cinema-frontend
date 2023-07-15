import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../interfaces';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { switchMap, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  isHovered: boolean = false;
  movieService: MovieService = inject(MovieService)
  router: Router = inject(Router)

  onMouseLeave() {
    this.isHovered = false;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  setCurrentMovie$() {
    this.movieService.getOneMovie$(this.movie.id)
      .pipe(take(1))
      .subscribe({
        next: movie => this.movieService.setCurrentMovie$(movie)
      })
  }

  getCurrentUrl(): string {
    return this.router.url // '/movies/
  }
}
