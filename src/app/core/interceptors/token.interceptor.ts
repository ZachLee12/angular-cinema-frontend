import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      const modifiedRequest = request.clone(
        {
          setHeaders: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      return next.handle(modifiedRequest)
    }

    return next.handle(request);
  }
}
