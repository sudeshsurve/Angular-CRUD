import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../authotication-component/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleauthGuard implements CanActivate {
  constructor(private authservise : AuthServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role =JSON.parse(localStorage.getItem('role') || '{}');    
      if(role === 'admin'){
        return true;
      }
     alert('you are not authorise')
      return false
  }
  
}
