import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BookingComponent } from '../booking/booking/booking.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    {
        path: "movies",
        component: MoviePageComponent,
        children: [
            {
                path: '',
                component: MovieListComponent,
            },
            {
                path: 'details/:id',
                component: MovieDetailComponent,
            },
            {
                path: 'booking/:id/:showtime',
                component: BookingComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MovieRoutingModule { }