import { Injectable } from '@angular/core';
import { catchError, pipe, switchMap, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  HttpResponse
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
          if (err.status === 401) {
            console.log('here')
            return this.handle401Error(requestWithAuthHeader, next)
          } else {
            return throwError(() => err)
          }
        })

      )
  }//intercept

  private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
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
