import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LoginModule } from './components/login/login.module';
import { SignUpModule } from './components/sign-up/sign-up.module';
import { AccountsRoutingModule } from './accounts-routing.module';
@NgModule({
  declarations: [
    AccountsComponent,],
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule,
    AccountsRoutingModule,
  ]
})
export class AccountsModule { }
