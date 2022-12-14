import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface iDeactivatecomponrnt{
  CanExit : ()=> Observable<boolean> | Promise<boolean> | boolean
} 

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<iDeactivatecomponrnt> {
  canDeactivate(
    component: iDeactivatecomponrnt,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.CanExit?component.CanExit():true
  }
}
