import { Component, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { mockSlides } from './mock-slides';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class CarouselComponent {
  currentIndex: number = 0
  slides: any[] = mockSlides
  movies$?: Observable<any>;
  unsubscribe$: Subject<void> = new Subject();
  movieService: MovieService = inject(MovieService)

  ngOnInit() {
    this.movieService.getMovies$().pipe(
      tap(movies => {
        movies.forEach((m, index) => {
          m.imgUrl = '../../../../../assets/images/placeholder.jpg'
          m.display = index === 0 ? true : false
        })
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe(
      {
        next: movies => this.slides = movies
      }
    )
  }

  next() {
    if (this.currentIndex === this.slides.length - 1) {
      this.currentIndex = 0;
    }
    else if (this.currentIndex === -1) {
      this.currentIndex = this.slides.length
    } else {
      this.currentIndex += 1;
    }
    this.slides.forEach(s => s.display = false)
    this.slides[this.currentIndex].display = true
  }

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.slides.length - 1
    } else {
      this.currentIndex -= 1;
    }
    this.slides.forEach(s => s.display = false)
    this.slides[this.currentIndex].display = true
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
