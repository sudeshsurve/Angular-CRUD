import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from "../../../app/data-type/UserdataType";
@Injectable({
  providedIn: 'root'
})
export class UserService   {
  public loding = new BehaviorSubject<boolean>(false)
  public User_list = new BehaviorSubject<any>([])
  public API :string ='http://localhost:4000/users'

  constructor(private http : HttpClient) {
    // this.Get_User()
   }

   Add_User(body:User){
    return this.http.post(`${this.API}/post_data`, body , {observe:'response'})
   }
     
   Remove_User(id:string){
    return this.http.delete(`${this.API}/`+ id ,{observe:'response'})
   }
    
   Get_User(){
    return this.http.get(`${this.API}/all_users` , {observe:'response'})
   }

   Update_user(body:User , id:string){
    return this.http.put(`${this.API}/` + id , body , {observe:'response'})
   }
    
   Get_Single_User(id:string){
    // console.log(id);
    return this.http.get(`${this.API}/` + id , {observe:'response'})
   }
}
