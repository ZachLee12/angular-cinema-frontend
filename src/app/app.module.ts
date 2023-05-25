import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './feature/movie/movie.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { AboutComponent } from './routes/about/about.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { BookingModule } from './feature/booking/booking.module';
import { AdminComponent } from './routes/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    AdminComponent,
    PlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),

    //custom modules
    MovieModule,
    BookingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
