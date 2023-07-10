import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './routes/main-page/components/main-page/main-page.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { AboutComponent } from './routes/about/about.component';

const routes: Routes = [
  {
    path: "",
    // component: PlaceholderComponent,
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: MainPageComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "about",
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
