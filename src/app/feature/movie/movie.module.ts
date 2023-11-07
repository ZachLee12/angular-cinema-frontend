import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieRoutingModule } from './movie-routing.module';
import { BookingModule } from '../booking/booking.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [
    MovieItemComponent,
    MoviePageComponent,
    MovieListComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookingModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
