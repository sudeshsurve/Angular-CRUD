import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../authotication-component/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router , private Auth : AuthServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.Auth.isLoggedIn()){
        this.router.navigate(['/login'] , {queryParams: {redirectUrl: state.url}})
        return false
      }
       return this.Auth.isLoggedIn()
  }
  
}
