import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { iDeactivatecomponrnt } from 'src/app/guards/can-deactivate.guard';
import { UserService } from '../../user-service/user.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements  iDeactivatecomponrnt , OnInit  {
  public success_msg:undefined | boolean
  public update_msg:undefined | boolean
  public error_msg : undefined | boolean
  @ViewChild('UserForm') form!: NgForm
  public obj: any = {}
  firstname :string =''
  lastname :string =''
  City :string =''
  State :string =''
  Zip :string =''
  user_password :string =''

  constructor(private userservise: UserService, private router: Router, private rout: ActivatedRoute) { }
  
  
  ngOnInit(): void {
    // this.CanExist()

    
    this.rout.queryParams.subscribe((res: any) => {
      if (res.id) {
        this.obj = res
        this.userservise.Get_Single_User(res.id)
          .subscribe((res: any) => {
            if (res && res.body) {
              console.log('bodddy');
              this.form.setValue({
                firstName: res.body.firstName,
                lastName: res.body.lastName,
                password: res.body.password,
                city: res.body.city,
                state: res.body.state,
                zip: res.body.zip,
              })
            }

          })
      }
    })
  }
  User_Submit() {
    if(this.form.invalid){
       this.error_msg = true
       console.log("invalid");
       
       setTimeout(() => {
        this.error_msg = undefined
       }, 2000);
    }
    else{
      if (!this.obj.id) {
        console.log('addvtton');
        
      this.userservise.Add_User(this.form.value).subscribe((res: any) => {
        if (res && res.body) {
          this.success_msg = true
          setTimeout(() => {
            this.success_msg =undefined
             this.form.reset()
          }, 2000);
        }
      })
    }
    else {
      this.userservise.Update_user(this.form.value, this.obj.id).subscribe((res: any) => {
        if (res) {
          this.update_msg = true
          setTimeout(() => {
            this.update_msg =undefined
             this.form.reset()
          }, 2000);
        }
      },(error)=>{
        alert('you are not authorizes Please login')
      this.router.navigate(['/login'])
      })
    } 
    }
   

  }


  CanExit() {
    if(this.firstname || this.lastname || this.City || this.State || this.user_password || this.Zip){
      return confirm('Do You want To Discard Changes?')
    }else{
      return true
    }

  }


}
