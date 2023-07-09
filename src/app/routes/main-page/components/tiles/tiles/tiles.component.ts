import { Component } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
  tiles: any[] = [
    {
      iconSrc: 'iconSrc here',
      descTitle: 'desc title',
      desc: 'description hereee'
    },
    {
      iconSrc: 'iconSrc here',
      descTitle: 'desc title',
      desc: 'description hereee'
    },
    {
      iconSrc: 'iconSrc here',
      descTitle: 'desc title',
      desc: 'description hereee'
    },
    {
      iconSrc: 'iconSrc here',
      descTitle: 'desc title',
      desc: 'description hereee'
    },
  ]
}
