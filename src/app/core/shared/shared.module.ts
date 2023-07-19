import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordSpacingPipe } from '../pipes/word-spacing/word-spacing.pipe';



@NgModule({
  declarations: [WordSpacingPipe],
  imports: [
    CommonModule
  ],
  exports: [WordSpacingPipe]
})
export class SharedModule { }
