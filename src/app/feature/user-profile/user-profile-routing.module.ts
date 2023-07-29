import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './component/user-profile.component';
import { UserAccountComponent } from './routes/user-account/user-account.component';
import { UserBookingComponent } from './routes/user-booking/user-booking.component';

const routes: Routes = [
    {
        path: 'user/:userId',
        component: UserProfileComponent,
        children: [
            {
                path: 'account',
                component: UserAccountComponent
            },
            {
                path: 'bookings',
                component: UserBookingComponent
            },
        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRoutingModule { }