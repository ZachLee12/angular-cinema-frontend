import { Component, inject } from '@angular/core';
import { Observable, filter, switchMap } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserProfileService } from '../../service/user-profile.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent {
  loginService: LoginService = inject(LoginService)
  userProfileService: UserProfileService = inject(UserProfileService)

  userBookings$!: Observable<any>;


  ngOnInit() {
    this.userBookings$ = this.loginService.getTokenUserProfile$()
      .pipe(filter(({ id }) => id !== ''), switchMap(({ id }) => this.userProfileService.getUserBookings$(id)))
  }

}
