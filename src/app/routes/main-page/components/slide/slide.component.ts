import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @Input() imgSrc: string = 'imgSrc here';
  @Input() title: string = 'some title';


}
