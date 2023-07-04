import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/components/sign-up/sign-up.component';
import { LoginPageComponent } from './components/login/components/login-page/login-page.component';

const routes: Routes = [
    {
        path: 'accounts',
        children: [
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: 'login',
                component: LoginPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }
