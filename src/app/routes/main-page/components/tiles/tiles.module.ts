import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles/tiles.component';
import { TileItemComponent } from './tile-item/tile-item.component';


@NgModule({
  declarations: [TilesComponent, TileItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TilesComponent]
})
export class TilesModule { }
