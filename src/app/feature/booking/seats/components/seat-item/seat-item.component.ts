import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SeatData } from '../../interfaces';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent {
  @Input() seatData?: SeatData;
  @Output() selectedEvent = new EventEmitter<SeatData>();

  getSeatData() {
    console.log(this.seatData)
    return this.seatData
  }

  toggleSelected() {
    //'if' here is necessary as a Type Guard, read more below:
    //https://bartwullems.blogspot.com/2022/05/typescript-left-hand-side-of-assignment.html
    if (this.seatData) {
      this.seatData.selected = !this.seatData.selected;
    }
  }

  emitSelectedEvent() {
    this.selectedEvent.emit(this.seatData)
  }

}
