import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, skip, switchMap, tap } from 'rxjs';
import { UserProfile } from 'src/app/core/services/login/interfaces';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserProfileService } from '../service/user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  loginService: LoginService = inject(LoginService)
  userProfileService: UserProfileService = inject(UserProfileService)

  userProfile$?: Observable<any>
  userBookings$?: Observable<any>


  ngOnInit() {
    this.userProfile$ = this.loginService.getTokenUserProfile$()
      .pipe(filter(({ username }) => username !== ''), switchMap(({ username }) => this.userProfileService.getUserProfile$(username)))

    this.userBookings$ = this.loginService.getTokenUserProfile$()
      .pipe(filter(({ id }) => id !== ''), switchMap(({ id }) => this.userProfileService.getUserBookings$(id)))

  }



}
