import { Component, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
  ]
})
export class SlideComponent {
  @Input() imgSrc: string = 'imgSrc here';
  @Input() title: string = 'some title';


}
