import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-angular-client';
  userProfile$?: Observable<any>;

  constructor(private authService: AuthService) {
    this.userProfile$ = this.authService.getUserProfileObservable()
    this.userProfile$.subscribe(data => console.log(data))
  }

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }

  getIsLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}
