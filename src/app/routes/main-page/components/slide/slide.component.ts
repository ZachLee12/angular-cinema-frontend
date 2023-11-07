import { Component, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Movie } from 'src/app/feature/movie/interfaces';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
  ]
})
export class SlideComponent {
  @Input() slide?: Movie;
  placeholderImgUrl: string = "../../../../../assets/images/placeholder.jpg"


  checkLastElement(index: any, array: any[]) {
    return index === array.length - 1
  }
}
