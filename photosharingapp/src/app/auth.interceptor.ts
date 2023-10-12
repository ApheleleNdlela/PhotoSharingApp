import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
      const token = this._authService.getToken();

      if(!token){
          return next.handle(req);
      }

      const authRequest = req.clone({
          headers: req.headers.set("x-access-token", token)
      })
      return next.handle(authRequest);
  }
}
