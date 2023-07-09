import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { MatIconModule } from '@angular/material/icon';
import { TilesComponent } from './components/tiles/tiles/tiles.component';
import { TilesModule } from './components/tiles/tiles.module';



@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    SlideComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TilesModule
  ],
  exports: []
})
export class MainPageModule { }
