import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
     public username : string | undefined 
  constructor(private router : Router) { }

  ngOnInit(): void {
    let localdata =  localStorage.getItem('token')
    let  user = localdata && JSON.parse(localdata)
    this.username = user.fullname
    console.log(this.username);
     
  }
  Logout(){
    localStorage.removeItem('token')
   this.router.navigate(['/login'])
  }
}
