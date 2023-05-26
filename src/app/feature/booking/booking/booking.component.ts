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
  numberOfSeatsBooked!: number;
  numberOfSeats !: number;
  seatsBooked!: any[];
  generatedIntegers: number[] = [];

  seatLayout: any[] = []

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService) {
  }

  ngOnInit() {
    new Promise<void>((resolve) => {
      this.activatedRoute.queryParams.subscribe(params => {
        this.id = params['id'];
        this.movieName = params['name'];
        this.movieTime = params['time'];
        this.numberOfSeats = params['numberOfSeats']
        this.numberOfSeatsBooked = params["numberOfSeatsBooked"]
        this.seatsBooked = params["seatsBooked"]
      })
      resolve()
    }).then(() => {
      console.log(this.numberOfSeats)
      this.generateSeats(this.numberOfSeats)
    })
      .then(() => {
        this.seatLayout.forEach(seat => {
          if (this.seatsBooked?.includes(seat.id.toString())) {
            seat.isBooked = true
          }
        })
      })
  }

  generateRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateSeats(count: number) {
    console.log('count received: ' + count)
    for (let i = 0; i < count; i++) {
      let seatObject = Object.create({ id: i + 1, isSelected: false, isBooked: false })
      this.seatLayout.push(seatObject)
    }
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
    this.seatLayout.forEach((seat) => {
      if (seat.isSelected) {
        numberOfSeatsBooked++
        this.seatsBooked = [...this.seatsBooked, seat.id]
      }
    })

    this.movieService.updateMovieBooking(this.id, numberOfSeatsBooked, this.seatsBooked)
  }
}
