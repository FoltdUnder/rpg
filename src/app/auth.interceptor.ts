import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  userId = '0';

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.userId = JSON.parse(user)['id'].toString();
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('user-id', this.userId),
    })
    return next.handle(authReq);
  }
}
