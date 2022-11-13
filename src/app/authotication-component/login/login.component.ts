import { Component, OnInit } from '@angular/core';
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
  constructor(private Auth : AuthServiceService , private router :Router , private activatedrout : ActivatedRoute) { }

  ngOnInit(): void {
// this.redirectUrl = this.activatedrout.snapshot.queryParamMap.get('redirectUrl') 
//   console.log(this.redirectUrl);

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
}
else{
  this.Auth.login(form.value).subscribe((res:any)=>{
    if(res){
      this.Auth.setToken(res.body)  
      if(this.redirectUrl.redirectUrl){
        this.router.navigateByUrl(this.redirectUrl.redirectUrl)
      }else{
        this.router.navigate(['/Admin']) 
        }
      
    }else{
      this.errmsg = true
    }
  })
}
    setTimeout(() => {
      this.errmsg = false
    }, 2000);
  }

}
