import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserProfile } from 'src/app/core/services/login/interfaces';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  loginService: LoginService = inject(LoginService)
  userProfile$?: Observable<UserProfile>

  ngOnInit() {
    this.userProfile$ = this.loginService.getUserProfile$()

  }

}
