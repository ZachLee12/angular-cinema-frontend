import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HallSelectionComponent } from './hall-selection/hall-selection.component';

const routes: Routes = [
    {
        path: 'booking/hall/:movieId/:showtime',
        component: HallSelectionComponent
    },

    {
        path: 'booking/hall/:movieId/:showtime/seats',
        component: BookingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookingRoutingModule { }