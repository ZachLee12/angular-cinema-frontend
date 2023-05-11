import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',

  clientId: '765640755827-4umfa1ooabgrkhu8mcgovlktqb2oj1lb.apps.googleusercontent.com',
  strictDiscoveryDocumentValidation: false,
  //redirect user here, after login, to the app
  redirectUri: 'http://localhost:4200',
  scope: 'openid profile email',
  logoutUrl: 'https://www.google.com/accounts/Logout'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfileSubject: Subject<any> = new Subject();
  authTokenSubject: Subject<any> = new Subject();

  constructor(private oAuthService: OAuthService) {
    this.oAuthService.configure(authConfig)
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    this.oAuthService.loadDiscoveryDocument().then(() => {

      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        }
        else {
          this.oAuthService.loadUserProfile().then(userProfile => {
            console.log(userProfile)
          })
        }
      })
    })
  }

  signOut() {
    this.oAuthService.revokeTokenAndLogout({
      client_id: this.oAuthService.clientId,
      returnTo: this.oAuthService.redirectUri
    }, true)
  }
}
