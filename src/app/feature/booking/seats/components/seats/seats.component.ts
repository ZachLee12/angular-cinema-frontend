import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { SeatData } from '../../interfaces';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';

enum SeatsTemplate {
  TWO = 2,
  FIVE = 5,
  TEN = 10
}

type HallSize = 'BIG' | 'MEDIUM' | 'SMALL' | 'DEFAULT'

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})

export class SeatsComponent {
  @Output() selectedSeatsEvent = new EventEmitter<SeatData[]>();
  @Input() userBookingsFromDatabase: any[] = [];

  hallSize: HallSize = 'MEDIUM';
  numOfSeats?: number;

  //services
  movieService: MovieService = inject(MovieService)

  //arrayTemplates
  lengthTwoArrayTemplate = new Array(2).fill('')
  lengthFiveArrayTemplate = new Array(5).fill('')
  lengthTenArrayTemplate = new Array(10).fill('')

  //template of the seats
  seatsTemplate?: {};

  //array of bookedSeats
  bookedSeats: SeatData[] = [];

  ngOnInit() {
    // UNCOMMENT THIS AFTER YOU ARE FINISHED DESIGNING THIS COMPONENT
    this.movieService.getCurrentHall$().subscribe(
      {
        next: hall => {
          this.hallSize = hall?.hallSize
        }
      }
    )

  }

  checkIfSeatIsAlreadyBooked(rowId: number, columnId: number) {
    let result: boolean = false;
    this.userBookingsFromDatabase?.forEach((seatsBooked: SeatData[]) => {
      seatsBooked.forEach((seat: SeatData) => {
        if ((seat.columnId === columnId) && (seat.rowId === rowId)) {
          result = true
        }
      })
    })

    return result
  }

  getArrayTemplate(arrayLength: number) {
    return new Array(arrayLength).fill('')
  }

  bookOrUnbookSeat(event: SeatData) {
    if (event.selected && !this.bookedSeats.includes(event)) {
      this.bookedSeats?.push(event)
    } else {
      const removeIndex = this.bookedSeats.indexOf(event)
      this.bookedSeats.splice(removeIndex, 1)
    }
  }

  emitSelectedSeats() {
    this.selectedSeatsEvent.emit(this.bookedSeats)
  }

}
