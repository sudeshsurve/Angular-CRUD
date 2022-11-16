import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contact! : FormGroup
  submitted = false
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor( public formbuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.contact = this.formbuilder.group({
      name : ['' ,[ Validators.required , Validators.minLength(4)]],
        email : ['' ,[ Validators.required , Validators.email , Validators.pattern(this.emailPattern)] ],
        message : ['' , [ Validators.required , Validators.minLength(6)]],
        phone : [ '' , [ Validators.required , Validators.minLength(10)]],
    })

  }


  
  submit(){
    this.submitted = true
if(this.contact.invalid){
  return  
}
else{
  console.log(false);
  
}


  }

  CanExit(){
    if(this.contact.touched){
      return confirm('do you want do  Exit')
    }else{  
      return true
    }
  }

}
