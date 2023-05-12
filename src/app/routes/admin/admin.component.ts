import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/core/services/database/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  movies: string[] = []
  movieName: string = '';
  serverResponse?: any;
  constructor(private httpClient: HttpClient, private databaseService: DatabaseService) {
    this.getMovieNames()
  }

  resetSeatsBooked() {
    this.databaseService.resetSeatsBooked(this.movieName).subscribe(response => {
      this.serverResponse = response
    })
  }

  getMovieNames() {
    this.databaseService.getMovieNames().subscribe((response: [{ name: string }]) => {
      response.forEach(obj => {
        this.movies.push(obj.name)
      })
    })
  }

}
