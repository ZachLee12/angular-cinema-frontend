import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BookingComponent } from '../booking/booking/booking.component';

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
                path: 'booking/:id',
                component: BookingComponent,
                pathMatch: "prefix"
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MovieRoutingModule { }