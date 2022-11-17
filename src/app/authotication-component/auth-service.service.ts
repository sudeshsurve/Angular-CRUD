import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataType } from '../../app/data-type/UserdataType';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   public eventememiter = new EventEmitter<boolean>(false)
 
  // public API :string = 'http://localhost:5000/create_user_account'
  constructor(private http :HttpClient , private router : Router) { }





  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token) );
  }

  getToken(): string | null {
    return   localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  Create_Account(body:UserdataType){
    return this.http.post( 'http://localhost:4000/auth/sign-up/', body , {observe:'response'})
}

  login(user_data:{email:string, password:string}){  
 return  this.http.post('http://localhost:4000/auth/login/', user_data , {observe:'response'})

  }


}