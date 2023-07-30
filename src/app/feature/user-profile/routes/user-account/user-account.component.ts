import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserProfileService } from '../../service/user-profile.service';
import { filter, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent {
  loginService: LoginService = inject(LoginService)
  userProfileService: UserProfileService = inject(UserProfileService)

  userProfile$?: Observable<any>

  ngOnInit() {
    this.userProfile$ = this.loginService.getTokenUserProfile$()
      .pipe(filter(({ username }) => username !== ''), switchMap(({ username }) => this.userProfileService.getUserProfile$(username)))

  }



}
