import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetures',
  templateUrl: './fetures.component.html',
  styleUrls: ['./fetures.component.scss']
})
export class FeturesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('token')
  this.router.navigate(['/login'])
  }
}
