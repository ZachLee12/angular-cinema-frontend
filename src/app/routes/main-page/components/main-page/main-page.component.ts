import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


const fadeInOut = trigger('fadeInOut', [
  state('open', style({
    opacity: 1
  })),
  state('close', style({
    opacity: 0
  })),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
])

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [fadeInOut] //array of triggers
})
export class MainPageComponent {
  backgroundImgSrcs: any[] = [
    {
      src: '../../../../../assets/images/movies/elemental.webp',
      display: true
    },
    {
      src: '../../../../../assets/images/movies/gifted.jpg',
      display: false
    },
    {
      src: '../../../../../assets/images/movies/coco.jpg',
      display: false
    }
  ]
  currentSrcIndex: number = 0;
  imgInterval?: NodeJS.Timer;

  constructor() { }

  ngOnInit() {
    this.imgInterval = setInterval(() => {
      this.nextBackgroundIndex();
    }, 10000)
  }

  nextBackgroundIndex() {
    if (this.currentSrcIndex === this.backgroundImgSrcs.length - 1) {
      this.currentSrcIndex = 0;
    } else {
      this.currentSrcIndex += 1;
    }
    this.backgroundImgSrcs.forEach(s => s.display = false)
    this.backgroundImgSrcs[this.currentSrcIndex].display = true;
  }

  ngOnDestroy() {
    clearInterval(this.imgInterval)
  }
}
