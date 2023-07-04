import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './feature/movie/movie.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { AboutComponent } from './routes/about/about.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { BookingModule } from './feature/booking/booking.module';
import { AdminModule } from './routes/admin/admin.module';
import { httpInterceptorProviders } from './core/interceptors';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AccountsModule } from './feature/accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    OAuthModule.forRoot(),

    //custom modules
    MovieModule,
    BookingModule,
    AccountsModule
  ],
  providers: [httpInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
