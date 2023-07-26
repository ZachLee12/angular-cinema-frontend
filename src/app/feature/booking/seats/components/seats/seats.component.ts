import { Component, EventEmitter, Output, inject } from '@angular/core';
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
  hallSize: HallSize = 'DEFAULT';
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
    this.seatsTemplate = this.mapHallSizeToSeatTemplate(this.hallSize)
    this.movieService.getCurrentHall$().subscribe(
      {
        next: hall => this.hallSize = hall?.hallSize
      }
    )
  }

  getArrayTemplate(arrayLength: number) {
    return new Array(arrayLength).fill('')
  }

  //try to do for SMALL hall first
  mapHallSizeToSeatTemplate(hallSize: string): {} {
    let template = {
      rows: 5,
      rowTemplate: SeatsTemplate.FIVE
    };

    return template
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
