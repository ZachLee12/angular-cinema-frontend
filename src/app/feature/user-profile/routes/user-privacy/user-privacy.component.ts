import { Component, inject } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LoginService } from 'src/app/core/services/login/login.service';
import { gql } from 'apollo-angular';

const CHANGE_PASSWORD = gql`
  type Mutation
`

@Component({
  selector: 'app-user-privacy',
  templateUrl: './user-privacy.component.html',
  styleUrls: ['./user-privacy.component.scss']
})
export class UserPrivacyComponent {
  loginService: LoginService = inject(LoginService)


  ngOnInit() {
    console.log(jwtDecode(this.loginService.getAccessToken()!))
  }

}
