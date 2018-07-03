import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  AuthControlService } from '../auth-control.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {
    email : "",
    firstname: "",
    lastname: "",
    username: "",
    about: "",
    college: "",
    address: "",
    mobileno: "",
    password: ""
  }; 

  constructor(public authControlService: AuthControlService) {  }

  ngOnInit() {
  }

  signup(){
    console.log("signedup");
    this.authControlService.postSignUp(this.user).subscribe(message => console.log(message));
  }


}
