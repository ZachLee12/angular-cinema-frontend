import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Subject, Observable, takeUntil } from 'rxjs';
import { LoginService } from './core/services/login/login.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-angular-client';
  googleDriveUserProfile$?: Observable<any>;
  unsubscribe$: Subject<void> = new Subject();

  loginService: LoginService = inject(LoginService)
  isLoggedIn: boolean = false;

  constructor(
    public readonly router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.authService.logIn();
  }

  ngOnInit() {
    this.googleDriveUserProfile$ = this.authService.getUserProfile$()
    this.googleDriveUserProfile$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => console.log(data))
    this.loginService.initLoginFlow$().subscribe({
      next: (userProfile) => console.log(`%c${userProfile}`, "color:green"),
      error: (err) => console.error(err)
    })

    this.loginService.getIsLoggedIn$().subscribe({
      next: (bool) => this.isLoggedIn = bool
    })
  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
