import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { devEnvironment } from 'src/environments/environment.dev';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken')
    if (request.url.includes('protected') && accessToken) {
      const modifiedRequest = request.clone(
        {
          headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
        }
      )
      return next.handle(modifiedRequest)
    }
    else {
      return next.handle(request);
    }
  }
}
