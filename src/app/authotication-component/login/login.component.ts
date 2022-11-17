import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errmsg:undefined | boolean = false
  redirectUrl :any
  login! : FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private Auth : AuthServiceService , private router :Router , private activatedrout : ActivatedRoute , public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.login = this.formbuilder.group({
      
        email : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)] ],
        password : ['' , [ Validators.required , Validators.minLength(6)]],
    })

this.activatedrout.queryParams.subscribe((res:any)=>{
  this.redirectUrl = res
  console.log(this.redirectUrl);
  
})

if(this.Auth.isLoggedIn()){
  this.router.navigate(['/Admin'])
} 
  }

  login_user(form:any){
if(!form.valid){
  this.errmsg = true
  console.log("form");
}
else{
  this.Auth.login(form.value).subscribe((res:any)=>{
    if(res){
      this.Auth.setToken(res.body.token)  
      if(this.redirectUrl.redirectUrl){
        this.router.navigateByUrl(this.redirectUrl.redirectUrl)
      }else{
        this.router.navigate(['/Admin']) 
        }
      
    }else{
      this.errmsg = true
    }
  },()=>{
    alert("invalid cradintial")
  })
}

if(this.errmsg){
  setTimeout(() => {
      this.errmsg = false
    }, 2000);
}
    
  }

}
