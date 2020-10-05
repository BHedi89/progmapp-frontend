import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  private loginService: LoginService;

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.loginService = this.injector.get(LoginService);
    }, 1);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.loginService) {
      if (request.method !== 'GET' && this.loginService.getCsrf() !== '') {
        const newHeaders = request.headers.set('X-CSRF-TOKEN', this.loginService.getCsrf());
        request = request.clone({headers: newHeaders});
      }
    }
    request = request.clone({withCredentials: true});
    return next.handle(request);
  }
}
