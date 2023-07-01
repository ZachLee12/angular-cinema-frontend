import { Injectable } from '@angular/core';
import { catchError, pipe, switchMap, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalAuthService } from '../services/local-auth/local-auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private localAuthService: LocalAuthService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.localAuthService.getAccessToken()
    const requestWithAuthHeader = request.clone({ headers: request.headers.set('Authorization', `Bearer ${accessToken}`) })

    return next.handle(requestWithAuthHeader)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          const refreshToken = this.localAuthService.getRefreshToken()?.trim()
          if (refreshToken !== '' && err.status === 401) {
            return this.initRefreshTokenProcedure(requestWithAuthHeader, next)
          } else {
            return throwError(() => err)
          }
        })

      )
  }//intercept

  private initRefreshTokenProcedure(req: HttpRequest<any>, next: HttpHandler) {
    return this.localAuthService.refreshAccessToken$().pipe(
      switchMap((token: { accessToken: string }) => {
        localStorage.setItem('accessToken', token.accessToken)
        const clonedReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        })
        return next.handle(clonedReq)
      })
    )
  }

}
