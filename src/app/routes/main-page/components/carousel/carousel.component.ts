import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { mockSlides } from './mock-slides';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class CarouselComponent {
  currentIndex: number = 0
  slides: any[] = mockSlides

  next() {
    if (this.currentIndex === this.slides.length - 1) {
      this.currentIndex = 0;
    }
    else if (this.currentIndex === -1) {
      this.currentIndex = this.slides.length
    } else {
      this.currentIndex += 1;
    }
    this.slides.forEach(s => s.display = false)
    this.slides[this.currentIndex].display = true
  }

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.slides.length - 1
    } else {
      this.currentIndex -= 1;
    }
    this.slides.forEach(s => s.display = false)
    this.slides[this.currentIndex].display = true
  }

}
