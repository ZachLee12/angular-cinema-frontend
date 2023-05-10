import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() id = "";
  @Input() time = "";
  @Input() name = "";
  @Input() numberOfSeats = 0;
  @Input() numberOfSeatsBooked = 0;
  @Input() seatsBooked: any = [];

}
