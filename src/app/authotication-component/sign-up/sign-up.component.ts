import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserdataType } from "../../data-type/UserdataType";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 public success_msg : undefined | boolean = false
 registerForm! : FormGroup
 submitted = false
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router : Router , private Auth: AuthServiceService , public formbuilder : FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formbuilder.group({
      firstName : ['' ,[ Validators.required , Validators.minLength(4)]],
        email : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)]],
        password : ['' , [ Validators.required , Validators.minLength(6)]]
    })
    if(this.Auth.isLoggedIn()){
      this.router.navigate(['/Admin/Dashbord'])    
    }
  }

  onSubmit(userdata :UserdataType ){
this.submitted = true
if(this.registerForm.invalid){
 return
}else{
  this.Auth.Create_Account(userdata).subscribe((res:any)=>{
    if(res){
      console.log(res);
      this.success_msg= true
      setTimeout(() => {
       this.success_msg= false 
        this.router.navigate(['/login'])
      }, 2000);
    }
  },(err)=>{  
    alert("user Already Exists")
  })
}
// alert('valid')
  }

   
}



 