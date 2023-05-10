import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  id!: any;
  movieName!: string;
  movieTime!: string;

  seatLayout: any[] = [
    { id: 1, isSelected: false },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
    { id: 5, isSelected: false },
    { id: 6, isSelected: false },
    { id: 7, isSelected: false },
    { id: 8, isSelected: false },
    { id: 9, isSelected: false }]

  constructor(private activatedRoute: ActivatedRoute) {

  }

  setSelectedSeat(e: any) {
    this.seatLayout.forEach(seat => {
      if (seat.id == e.target.id) {
        seat.isSelected = true
      }
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.movieName = params['name'];
      this.movieTime = params['time']
    });

  }
}
