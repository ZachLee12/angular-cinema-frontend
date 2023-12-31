import { Injectable, inject } from '@angular/core';
import { catchError, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  loginService: LoginService = inject(LoginService)


  ngOnInit() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('protected') || request.url.includes('auth')) {
      const accessToken = this.loginService.getAccessToken()
      const requestWithAuthHeader = request.clone({ headers: request.headers.set('Authorization', `Bearer ${accessToken}`) })

      return next.handle(requestWithAuthHeader)
        .pipe(
          tap(() => console.log('TokenInterceptor executed:')),
          catchError((err: HttpErrorResponse) => {
            const refreshToken = this.loginService.getRefreshToken()?.trim()
            if (refreshToken !== '' && err.status === 401) {
              return this.initRefreshTokenProcedure(requestWithAuthHeader, next)
            } else {
              return throwError(() => err)
            }
          })
        )
    }//if 
    else {
      return next.handle(request); //important to pass on the request handler!!!
    }//else
  }//intercept

  private initRefreshTokenProcedure(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.loginService.refreshAccessToken$().pipe(
      switchMap((token: { accessToken: string }) => {
        localStorage.setItem('accessToken', token.accessToken)
        const clonedReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        })
        return next.handle(clonedReq) //important to pass on the request handler!!!
      })
    )
  }

}
