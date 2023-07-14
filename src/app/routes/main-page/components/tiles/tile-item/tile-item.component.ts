import { Component, Input, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent {
  router: Router = inject(Router)
  @Input() iconSrc?: string;
  @Input() descTitle?: string;
  @Input() desc?: string;
  @Input() website?: string;
  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  getSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
  navigateToExternalUrl(url: string): void {
    this.router.navigateByUrl(url, { skipLocationChange: true });
  }
}
