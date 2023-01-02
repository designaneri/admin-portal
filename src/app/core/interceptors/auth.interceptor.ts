import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userDetailToken = this.authService.getUserDetails();
    // 
    if (request.url.includes('upload/')) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Token ${userDetailToken.token}`,
          // 'content-type':'multipart/form-data'
        }
      });
    }
    else if (userDetailToken && !request.url.includes('upload/')) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Token ${userDetailToken.token}`,
        }
      });
    }
    else {
      request = request.clone({});
    }

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api

        this.authService.logout();
      }
      const error = err.error;
      return throwError(error);
    }))
  }
}
