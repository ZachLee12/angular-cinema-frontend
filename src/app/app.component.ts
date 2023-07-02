import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Subject, Observable, takeUntil } from 'rxjs';
import { LoginService } from './core/services/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-angular-client';
  userProfile$?: Observable<any>;
  unsubscribe$: Subject<void> = new Subject();

  loginService: LoginService = inject(LoginService)
  isLoggedIn: boolean = false;


  ngOnInit() {
    // this.userProfile$ = this.authService.getUserProfile$()
    // this.userProfile$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => console.log(data))
    this.loginService.initLoginFlow$().subscribe({
      next: (userProfile) => console.log(`%c${userProfile}`, "color:green"),
      error: (err) => console.error(err)
    })

    this.loginService.getIsLoggedIn$().subscribe({
      next: (bool) => this.isLoggedIn = bool
    })
  }

  logIn() {
    // this.authService.logIn();
  }

  logOut() {
    // this.authService.logOut();
  }

  getIsLoggedIn() {
    // return this.authService.getIsLoggedIn();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
