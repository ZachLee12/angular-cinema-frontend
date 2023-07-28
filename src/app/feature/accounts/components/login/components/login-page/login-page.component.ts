import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Observable, Subject, catchError, map, of, switchMap, takeUntil, tap, throwError } from 'rxjs';
import { Tokens } from 'src/app/routes/admin/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { UserProfile } from 'src/app/core/services/login/interfaces';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  //Dependency Injections (new style)
  formBuilder: FormBuilder = inject(FormBuilder)
  loginService: LoginService = inject(LoginService)
  router: Router = inject(Router)

  loginForm!: FormGroup;
  isLoginSuccessful$!: Observable<boolean>;
  loginAttempted: boolean = false;
  loginStatusMessage: string = '';
  rememberMe: boolean = false;
  unsubscribe$: Subject<void> = new Subject();


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  async login() {
    this.loginAttempted = true;
    this.isLoginSuccessful$ = this.loginService.login(this.loginForm.value).pipe(
      switchMap((tokens: Tokens) =>
        of(this.loginService.setTokens(tokens, this.rememberMe)).pipe(
          map(() => {
            this.loginStatusMessage = 'Login Successful'
            this.loginService.setIsLoggedIn$(true)
            const { firstname, lastname, username, age, id } = jwtDecode(tokens.accessToken) as UserProfile
            const userProfile = { firstname, lastname, username, age, id }
            this.loginService.setTokenUserProfile$(userProfile)
            this.router.navigate(['/home'])
            return true
          })
        )),
      catchError((httpErrorResponse: HttpErrorResponse) => {
        this.loginStatusMessage = httpErrorResponse.error.message
        return of(false)
      }),
      takeUntil(this.unsubscribe$)
    )
  }

  setRememberMe($event: any) {
    this.rememberMe = $event.target.checked
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
