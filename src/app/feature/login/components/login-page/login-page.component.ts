import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { catchError, of, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  //Dependency Injections (new style)
  formBuilder: FormBuilder = inject(FormBuilder)
  loginService: LoginService = inject(LoginService)

  loginForm!: FormGroup;
  loginStatus$: any;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('zachlee123', [Validators.required]),
      password: new FormControl('iLoveSushi%', [Validators.required])
    })
  }

  login() {
    //zachlee123
    //iLoveSushi%
    this.loginService.login(this.loginForm.value).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => console.log(err)
      }
    )
  }

}
