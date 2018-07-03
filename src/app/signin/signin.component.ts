import { Component, OnInit } from '@angular/core';
import {  AuthControlService } from '../auth-control.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string="";
  password: string="";

  constructor(public authControlService: AuthControlService) { }

  ngOnInit() {
  }

  signin(){
    console.log(this.email,this.password)
   if(this.email!=""&&this.password!=""){
    this.authControlService.postSignIn({email: this.email, password: this.password})
    .subscribe(res => console.log(res));
   }
  }
}
