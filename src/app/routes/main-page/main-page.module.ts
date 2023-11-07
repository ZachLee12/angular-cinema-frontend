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
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    SlideComponent,
  ],
  imports: [
    CommonModule,
    TilesModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: []
})
export class MainPageModule { }
