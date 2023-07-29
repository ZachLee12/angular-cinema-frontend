import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './component/user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService } from './service/user-profile.service';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { UserAccountComponent } from './routes/user-account/user-account.component';
import { UserBookingComponent } from './routes/user-booking/user-booking.component';



@NgModule({
  declarations: [UserProfileComponent, UserAccountComponent, UserBookingComponent],
  providers: [UserProfileService],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
