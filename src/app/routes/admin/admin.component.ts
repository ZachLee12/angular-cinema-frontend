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
  movieImageBase64: any = '';
  serverResponse?: any;


  constructor(private httpClient: HttpClient, private databaseService: DatabaseService) {
    this.getMovieNames()
  }

  handleImageInput(e: any) {
    const imageFile = e.target.files[0]
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => {
      this.movieImageBase64 = event.target.result
    }
    fileReader.readAsDataURL(imageFile) // need this for .onload to execute
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
    console.log(this.movieImageBase64)
    this.databaseService.addMovie(this.movieTime, this.movieNameToAdd, this.movieImageBase64).subscribe(response => {
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
