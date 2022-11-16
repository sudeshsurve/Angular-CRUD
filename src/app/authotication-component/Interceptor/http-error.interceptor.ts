import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public authservise : AuthServiceService , private toster : ToastrService) {}
// 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =  JSON.parse(localStorage.getItem('token')|| '{}') 
    let jwt  = request.clone({
        setHeaders:{
          Authorization: 'bearer '+ token
        }
       })

    return next.handle(jwt).pipe(catchError((error)=>{
      if(error instanceof HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
           console.log("error Event");
         }else{
          switch(error.status){
            case 400 :
            this.toster.error(`${error.statusText}`)
              break;
             case 402:
              this.toster.error(`${error.statusText} "Aurhrization Error"`)
             console.log(error.statusText);
             break;
             case 403:
              this.toster.error(`${error.statusText} "Access Error"`)
              console.log(error.statusText);
              break; 
              case 404:
              this.toster.error(`${error.statusText} "Not found"`)
              console.log(error.statusText);
              break; 
              case 503:
              this.toster.error(`${error.statusText} "Server Error"`)
              console.log(error.statusText);
              break;
          }
         }
      }else{
        console.log("an Error occurred");
      }
      return throwError(()=> new Error (error.statusText))
    }))


    
    
       
  }
 
}

