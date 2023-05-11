import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie/movie-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  id!: any;
  movieName!: string;
  movieTime!: string;
  numberOfSeatsBooked!: string;
  seatsBooked!: any[];
  generatedIntegers: number[] = [];

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

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService) {

  }

  ngOnInit() {
    new Promise<void>((resolve) => {
      this.activatedRoute.queryParams.subscribe(params => {
        this.id = params['id'];
        this.movieName = params['name'];
        this.movieTime = params['time'];
        this.numberOfSeatsBooked = params["numberOfSeatsBooked"]
        this.seatsBooked = params["seatsBooked"]
      })
      resolve()
    })
      .then(() => {
        this.seatLayout.forEach(seat => {
          if (this.seatsBooked?.includes(seat.id.toString())) {
            seat.isSelected = true
          }
        })
      })
  }

  generateRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setSelectedSeat(e: any) {
    this.seatLayout.forEach(seat => {
      if (seat.id == e.target.id) {
        seat.isSelected = true
      }
    })
  }

  confirmBooking() {
    let numberOfSeatsBooked = 0
    let seatsBooked: number[] = []
    this.seatLayout.forEach((seat) => {
      if (seat.isSelected) {
        numberOfSeatsBooked++
        seatsBooked.push(seat.id)
      }
    })

    this.movieService.updateMovieBooking(this.id, numberOfSeatsBooked, seatsBooked)
  }
}
