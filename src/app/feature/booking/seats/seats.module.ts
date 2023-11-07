import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './components/seats/seats.component';
import { SeatItemComponent } from './components/seat-item/seat-item.component';



@NgModule({
  declarations: [
    SeatsComponent,
    SeatItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SeatsComponent]
})
export class SeatsModule { }
