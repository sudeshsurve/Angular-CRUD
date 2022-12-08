import { Component, OnInit } from '@angular/core';
import { UserService } from '../User-module/user-service/user.service';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.scss']
})
export class LoderComponent implements OnInit {

  loder : boolean | undefined
  constructor(private userservise : UserService) { }

  ngOnInit(): void {
    this.userservise.loding.subscribe(res =>{
      this.loder = res
    })
  } 

}
