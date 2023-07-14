import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
    {
        path: "movies",
        component: MoviePageComponent,
        children: [
            {
                path: '',
                component: MovieListComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MovieRoutingModule { }