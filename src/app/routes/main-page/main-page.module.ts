import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class MainPageModule { }
