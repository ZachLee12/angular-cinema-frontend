import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Subject, Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-angular-client';
  userProfile$?: Observable<any>;
  unsubscribe$: Subject<void> = new Subject();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userProfile$ = this.authService.getUserProfile$()
    this.userProfile$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => console.log(data))
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
