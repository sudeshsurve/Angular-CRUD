import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data-type/UserdataType';
import { UserService } from '../../user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
   public userList : any = []
   public search:string  =''
  constructor(private userservice: UserService) { }
  ngOnInit(): void {
    this.get_user_data()
  }
  search_input(){
    console.log(this.search);
  }
  
  remove_user(id:string){
   this.userservice.Remove_User(id).subscribe((res:any)=>{
    if(res){
      // console.log("delete" , id);
    this.get_user_data()
    }
   }) 
  }
  get_user_data(){
    this.userservice.Get_User().subscribe((res:any)=>{
      if(res){
          console.log(res);
          let array :any[] = res.body
          this.userList = array
        }
    },(err)=>{
      console.log(err.message);
      
    })
  }
  }

