import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, skip, switchMap } from 'rxjs';
import { UserProfile } from 'src/app/core/services/login/interfaces';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserProfileService } from '../service/user-profile.service';

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
      .pipe(skip(1), switchMap(({ username }) => this.userProfileService.getUserProfile$(username)))

    this.userBookings$ = this.loginService.getTokenUserProfile$()
      .pipe(skip(1), switchMap(({ id }) => this.userProfileService.getUserBookings$(id)))

    this.userBookings$.subscribe({
      next: movies => movies.forEach((movie: any) => console.log(movie))
    })
  }



}
