import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor");
       request = request.clone({
        setHeaders:{
          Authorization:'Token'
        }
       })
    return next.handle(request).pipe(
      retry(0),
      catchError(this.errHandel)
    )
  }
  errHandel(error:HttpErrorResponse){
    window.alert(error.message)
    return  throwError(error.message || 'Server Error')
  }
}
