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
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    username: new FormControl(''),
    birthday: new FormControl(new Date(2022, 6, 2).toISOString().substring(0, 10))
  })

}
