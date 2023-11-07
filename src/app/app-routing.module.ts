import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './routes/main-page/components/main-page/main-page.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { AboutComponent } from './routes/about/about.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: MainPageComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./routes/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "user/:userId",
    loadChildren: () => import("./feature/user-profile/user-profile.module").then(m => m.UserProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
