import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/data-type/UserdataType';
import { UserService } from '../../user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

@ViewChild('adduser')adduser :any

  public userID : string =''
  public submited : boolean = false
   public error_msg : undefined | boolean
   public userList : any = []
   public search:string  =''
   public obj: any = {}
   firstname :string =''
   lastname :string =''
   City :string =''
   State :string =''
   Zip :string =''
   user_password :string =''
   @ViewChild('UserForm') form!: NgForm
  constructor(private userservice: UserService) { }
  ngOnInit(): void {
    console.log("ngoninit");
    // this.userservice.Get_User().subscribe((res)=>{
    //   console.log(res);
      
    // })
    this.get_user_data()
  }
  adduserbtn(){
    this.submited = false
    this.form.reset()
  }

  User_Submit(){
  if(this.submited){
     this.userservice.Update_user( this.form.value , this.userID).subscribe((res)=>{
  console.log("update");
  this.get_user_data()
  this.form.reset()
     })
  }else{
     if(this.form.valid){
  this.userservice.Add_User(this.form.value).subscribe((res)=>{
    console.log("submit");
    this.get_user_data()
    this.form.reset()
  })
}
  }
      
  
 



}

onEdit(id:string){
    this.submited = true
    this.userID = id
    this.userservice.Get_Single_User(id)
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
          this.form.reset()
  // console.log(id);
   
  }

  search_input(){
    console.log(this.search);
  }
  
  remove_user(id:string){
   this.userservice.Remove_User(id).subscribe((res:any)=>{
    console.log(res);
    
     this.get_user_data()
  }) 
  }
  get_user_data(){

    this.userservice.Get_User().subscribe((res:any)=>{
      if(res){
       console.log(res);
        let array :any =[]  
          for (const emp of res.body) {
            array.unshift(emp)
          }
          this.userList = array 
      }

    })
  }
  }

