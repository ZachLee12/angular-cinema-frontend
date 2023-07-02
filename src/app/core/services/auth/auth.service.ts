import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';
import { devEnvironment } from 'src/environments/environment.dev';

export const authConfig: AuthConfig = {
  issuer: devEnvironment.AUTH_ISSUER,
  clientId: devEnvironment.AUTH_CLIENT_ID,
  strictDiscoveryDocumentValidation: false,
  //redirect user here, after login, to the app
  redirectUri: devEnvironment.AUTH_REDIRECT_URI,
  scope: devEnvironment.AUTH_SCOPE,
  logoutUrl: devEnvironment.AUTH_LOGOUT_URL,

}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: boolean = false;
  userProfile !: any;
  userProfileSubject: Subject<any> = new Subject<any>();

  constructor(
    private oAuthService: OAuthService,) {
    this.oAuthService.configure(authConfig)
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    this.oAuthService.loadDiscoveryDocument().then(() => {

      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.loadUserProfile().then(userProfile => {
            this.userProfile = userProfile
            this.userProfileSubject.next(userProfile)
            this.isLoggedIn = true
          })
        } else {
          this.userProfileSubject.next(null)
          this.isLoggedIn = false
          console.log("Not Logged In")
        }
      })
    })
  }

  logIn() {
    this.oAuthService.initLoginFlow();
  }

  logOut() {
    this.oAuthService.revokeTokenAndLogout({
      client_id: this.oAuthService.clientId,
      returnTo: this.oAuthService.redirectUri
    }, true)
  }

  getRoutePermission() {
    return this.userProfile["info"]["given_name"] === "Lee"
  }

  getAccessToken() {
    return this.oAuthService.getAccessToken()
  }

  getUserProfile$(): Observable<any> {
    return this.userProfileSubject.asObservable()
  }

  getIsLoggedIn() {
    return this.isLoggedIn
  }
}
