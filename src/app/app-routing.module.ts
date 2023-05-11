import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { AboutComponent } from './routes/about/about.component';
const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
