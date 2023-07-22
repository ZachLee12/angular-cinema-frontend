import { Component } from '@angular/core';

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

}
