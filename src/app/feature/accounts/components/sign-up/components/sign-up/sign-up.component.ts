import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formBuilder: FormBuilder = inject(FormBuilder)
  signUpService: SignUpService = inject(SignUpService)
  router: Router = inject(Router)

  signUpForm = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^.{5,}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[!@#$%^&*()\-=_+{}\[\]:;"'<>,.?/])(?=.*[A-Z]).{5,}$/)]),
    birthday: new FormControl('', [Validators.required])
  })

  async signUp() {
    this.signUpService.signUp(this.signUpForm.value as any).
      pipe(catchError(() => throwError(() => null))).subscribe(
        {
          next: data => {
            console.log(data)
            this.router.navigate(['/home'])
          },
          error: err => console.error(new HttpErrorResponse(err))
        }
      )
  }

}