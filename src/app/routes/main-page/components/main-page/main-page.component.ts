import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition('void => *', [animate('3s', style({ opacity: 1 }))])
  ]),
  trigger('fadeOut', [
    state('*', style({ opacity: 1 })),
    transition('* => void', [animate('3s', style({ opacity: 0 }))])
  ])
  ] //array of triggers
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
    }, 5000)
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
