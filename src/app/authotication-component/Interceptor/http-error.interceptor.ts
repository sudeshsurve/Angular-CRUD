import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User-module/user-service/user.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public authservise : AuthServiceService , private toster : ToastrService , private router : Router , private userservise: UserService) {}
// 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =  JSON.parse(localStorage.getItem('token')|| '{}') 
    let jwt  = request.clone({
        setHeaders:{
          Authorization: 'bearer '+ token
        }
       })

    return next.handle(jwt)
    
//     .pipe( tap(event =>{
//       this.userservise.loding.next(true) 
//       if (event.type == HttpEventType.Response) {
//          if(event.status == 200){
// this.userservise.loding.next(false)
//          }
//       }
//     })    ,catchError((error)=>{
//       if(error instanceof HttpErrorResponse){
//         if(error.error instanceof ErrorEvent){
//            console.log("error Event");
//          }else{
//           switch(error.status){
//             case 400 :
//             this.toster.error(`${error.statusText}`)
//             this.router.navigate(['/login'])
//               break;
//              case 402:
//               this.toster.error(`${error.statusText} "Aurhrization Error"`)
//             this.router.navigate(['/login'])
//              break;
//              case 403:
//               this.toster.error(`${error.statusText} "Access Error"`)
//              this.router.navigate(['/login'])
//               break; 
//               case 404:
//               this.toster.error(`${error.statusText} "Not found"`)
//              this.router.navigate(['/login'])
//               break; 
//               case 503:
//               this.toster.error(`${error.statusText} "Server Error"`)
//              this.router.navigate(['/login'])
//               break;
//           }
//          }
//       }else{
//         console.log("an Error occurred");
//       }
//       return throwError(()=> new Error (error.statusText))
//     }))


    
    
       
  }
 
}

