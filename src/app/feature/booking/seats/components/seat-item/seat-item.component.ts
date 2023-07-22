import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent {
  @Input() seatId?: { rowId: number, columnId: number };


  getSeatId() {
    console.log(this.seatId)
    return this.seatId
  }

}
