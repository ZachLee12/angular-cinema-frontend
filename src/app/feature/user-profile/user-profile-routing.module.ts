import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './component/user-profile.component';
import { UserAccountComponent } from './routes/user-account/user-account.component';
import { UserBookingComponent } from './routes/user-booking/user-booking.component';
import { UserPrivacyComponent } from './routes/user-privacy/user-privacy.component';
import { UserSettingsComponent } from './routes/user-settings/user-settings.component';

const routes: Routes = [
    {
        path: '',
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
            {
                path: 'privacy',
                component: UserPrivacyComponent
            },
            {
                path: 'settings',
                component: UserSettingsComponent

            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRoutingModule { }