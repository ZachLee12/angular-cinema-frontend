import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  movieName?: string;
  serverResponse?: any;
  constructor(private httpClient: HttpClient) {

  }

  resetSeatsBooked() {
    this.httpClient.post(`http://localhost:3000/admin/reset-seats-booked`, {
      movieName: this.movieName
    }).subscribe(response => this.serverResponse = response)
  }

}
