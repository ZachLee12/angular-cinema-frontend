import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { AboutComponent } from './routes/about/about.component';
import { BookingComponent } from './feature/booking/booking/booking.component';
import { ConfirmationComponent } from './feature/booking/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "booking",
    component: BookingComponent
  },
  {
    path: "confirmation",
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
