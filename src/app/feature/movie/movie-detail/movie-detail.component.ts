import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Movie } from '../interfaces';
import { mockMovie } from '../mock-movies';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movieService: MovieService = inject(MovieService)
  router: Router = inject(Router)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  activatedParentRoute$?: Observable<UrlSegment[]>;
  selectedMovie$: Observable<Movie> = of(mockMovie)


  ngOnInit() {
    this.activatedParentRoute$ = this.activatedRoute.parent?.url

  }

}
