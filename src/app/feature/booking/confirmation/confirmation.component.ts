import { Component } from '@angular/core';
import * as uniqid from 'uniqid';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  reservationId: string = uniqid()


}
