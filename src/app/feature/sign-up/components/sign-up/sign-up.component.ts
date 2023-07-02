import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formBuilder: FormBuilder = inject(FormBuilder)
  signUpService: SignUpService = inject(SignUpService)

  signUpForm = this.formBuilder.group({
    firstname: new FormControl('Carl', [Validators.required]),
    lastname: new FormControl('Jackson', [Validators.required]),
    username: new FormControl('jackson123', [Validators.required]),
    password: new FormControl('applePie@', [Validators.required]),
    birthday: new FormControl('', [Validators.required])
  })

  signUp() {
    this.signUpService.signUp(this.signUpForm.value as any).subscribe(
      {
        next: data => console.log(data)
      }
    )
  }

}
