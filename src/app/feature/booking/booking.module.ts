import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule } from '@angular/router';
import { BookingRoutingModule } from './booking-routing.module';
import { HallSelectionComponent } from './hall-selection/hall-selection.component';

@NgModule({
  declarations: [
    BookingComponent,
    ConfirmationComponent,
    HallSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
