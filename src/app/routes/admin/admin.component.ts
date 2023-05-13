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
  movieNameToAdd: string = '';
  movieNameToDelete: string = '';
  movieTime: string = '';
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

  addMovie() {
    this.movies.push(this.movieNameToAdd) //to update the UI without rerendering the page
    this.databaseService.addMovie(this.movieTime, this.movieNameToAdd).subscribe(response => {
      this.serverResponse = response
    })
  }

  deleteMovie() {
    this.movies = this.movies.filter(name => this.movieNameToDelete !== name)//to update the UI without rerendering the page
    this.databaseService.deleteMovie(this.movieNameToDelete).subscribe(response => {
      this.serverResponse = response
    })
  }

}
