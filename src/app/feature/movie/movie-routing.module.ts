import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BookingComponent } from '../booking/booking.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

const routes: Routes = [
    {
        path: "movie-page",
        component: MoviePageComponent,
        children: [
            {
                path: 'movies',
                component: MovieListComponent,
            }
        ]
    },
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
export class MovieRoutingModule { }