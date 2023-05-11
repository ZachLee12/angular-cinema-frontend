import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
    {
        path: "booking",
        component: BookingComponent
    },
    {
        path: "confirmation",
        component: ConfirmationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookingRoutingModule { }