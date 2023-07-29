import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordSpacingPipe } from '../pipes/word-spacing/word-spacing.pipe';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [WordSpacingPipe],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [WordSpacingPipe, MatIconModule,]
})
export class SharedModule { }
