import { Component } from '@angular/core';
import { SeatData } from '../../interfaces';

enum SeatsTemplate {
  TWO = 2,
  FIVE = 5,
  TEN = 10
}

enum HallSize {
  BIG = 'BIG',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL'
}

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})

export class SeatsComponent {
  hallSize?: string = 'SMALL';
  numOfSeats?: number;

  //arrayTemplates
  lengthTwoArrayTemplate = new Array(2).fill('')
  lengthFiveArrayTemplate = new Array(5).fill('')
  lengthTenArrayTemplate = new Array(10).fill('')

  //template of the seats
  seatsTemplate?: {};

  //array of bookedSeats
  bookedSeats: SeatData[] = [];

  ngOnInit() {
    this.seatsTemplate = this.mapHallSizeToSeatTemplate(this.hallSize!)
  }

  getHallSizeEnum(size: string) {
    if (size === 'BIG') return HallSize.BIG
    if (size === 'MEDIUM') return HallSize.MEDIUM
    if (size === 'SMALL') return HallSize.SMALL
    else return null
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

}
