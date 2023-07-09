import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent {
  @Input() iconSrc: string = ''
  @Input() descTitle: string = ''
  @Input() desc: string = ''

}
