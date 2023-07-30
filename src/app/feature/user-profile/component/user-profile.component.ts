import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  renderSidebar: boolean = true
  renderCloseIcon: boolean = false

  toggleSidebar() {
    this.renderSidebar = !this.renderSidebar
  }
}
