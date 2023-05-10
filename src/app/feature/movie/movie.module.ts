import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieRoutingModule } from './movie-routing.module';



@NgModule({
  declarations: [
    MovieItemComponent,
    MoviePageComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }