import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../interfaces';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: Movie;



}
