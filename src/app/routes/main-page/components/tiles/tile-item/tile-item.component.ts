import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent {
  @Input() iconSrc?: string;
  @Input() descTitle?: string;
  @Input() desc?: string;
  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  getSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
