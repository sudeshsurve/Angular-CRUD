import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserdataType } from "../../data-type/UserdataType";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 public success_msg : undefined | boolean = false
  constructor(private router : Router , private Auth: AuthServiceService) { }

  ngOnInit(): void {
    // if(this.Auth.isLoggedIn()){
    //   this.router.navigate(['/Admin/Dashbord'])
    // }
  }
  User_Signup(User: UserdataType){

this.Auth.Create_Account(User).subscribe((res:any)=>{
  
  if(res && res.body){
    this.success_msg= true
    setTimeout(() => {
     this.success_msg= false 
      this.router.navigate(['/login'])
    }, 2000);
  }
  else{
    alert("Something Wenr Wrong")
  }
})
}

   
}



 