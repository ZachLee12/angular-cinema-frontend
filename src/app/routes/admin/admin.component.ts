import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/core/services/database/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  movies = ["test", "test"]
  movieName: string = '';
  serverResponse?: any;
  constructor(private httpClient: HttpClient, private databaseService: DatabaseService) {

  }

  resetSeatsBooked() {
    this.databaseService.resetSeatsBooked(this.movieName).subscribe(response => {
      this.serverResponse = response
    })
  }

}
