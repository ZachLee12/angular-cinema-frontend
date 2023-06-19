import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/core/services/database/database.service';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/feature/movie/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  movies: Movie[] = []
  movieName: string = '';
  movieNameToAdd: string = '';
  movieNameToDelete: string = '';
  movieTime: string = '';
  movieImageBase64: any = '';
  movieSeatCount: number = 0;
  serverResponse?: any;
  unsubscribe$: Subject<void> = new Subject();

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.getMovies()
  }

  handleImageInput(e: any) {
    const imageFile = e.target.files[0]
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => {
      this.movieImageBase64 = event.target.result
    }
    fileReader.readAsDataURL(imageFile) // need this for .onload to execute
  }

  getMovies() {
    this.databaseService.getMovies$().subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies
      }
    })
  }

  resetSeatsBooked() {

  }


  addMovie() {

  }

  deleteMovie() {

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
