import { Component } from '@angular/core';
import * as uniqid from 'uniqid';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  reservationId: string = uniqid()

  generateQRCode() {
    const canvas = document.getElementById('qr-code')
    QRCode.toCanvas(canvas, 'Sample Text', err => {
      if (err) {
        console.error(err)
      }
    })
  }

  ngOnInit() {
    this.generateQRCode()
  }

}
