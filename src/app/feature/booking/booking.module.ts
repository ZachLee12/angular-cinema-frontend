import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [BookingComponent, ConfirmationComponent],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
