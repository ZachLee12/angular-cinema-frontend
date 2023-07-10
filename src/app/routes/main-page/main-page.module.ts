import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { MatIconModule } from '@angular/material/icon';
import { TilesComponent } from './components/tiles/tiles/tiles.component';
import { TilesModule } from './components/tiles/tiles.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordSpacingPipe } from 'src/app/core/pipes/word-spacing/word-spacing.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    SlideComponent,
    WordSpacingPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TilesModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: []
})
export class MainPageModule { }
