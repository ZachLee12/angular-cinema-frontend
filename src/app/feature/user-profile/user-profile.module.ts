import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './component/user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService } from './service/user-profile.service';
import { SharedModule } from 'src/app/core/shared/shared.module';



@NgModule({
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
