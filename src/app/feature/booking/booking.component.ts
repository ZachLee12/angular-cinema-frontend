import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie/movie-service.service';

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
        this.numberOfSeatsBooked = params["seatsBooked"]
      })
      resolve()
    })
      .then(() => {
        for (let i = 0; i < Number(this.numberOfSeatsBooked); i++) {
          let generatedInt = this.generateRandomInteger(0, 8)
          this.generatedIntegers.push(generatedInt)
          while (!this.generatedIntegers.includes(generatedInt)) {
            let generatedInt = this.generateRandomInteger(0, 8)
            this.generatedIntegers.push(generatedInt)
          }
          this.seatLayout[generatedInt].isSelected = true
        }
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
    let seatsBooked = 0
    this.seatLayout.forEach((seat) => {
      if (seat.isSelected) {
        seatsBooked++
      }
    })

    this.movieService.updateMovieBooking(this.id, seatsBooked)
  }
}
