import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {  AuthControlService } from '../auth-control.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor( private router: ActivatedRoute,
    private route: Router,public authControlService: AuthControlService ) { }

  ngOnInit() {
  }
   
  signin(){
    this.route.navigate(['signin'], { relativeTo: this.router});
  }
  signup(){
    console.log("signup");
    this.route.navigate(['signup'], { relativeTo: this.router});
  }

  logout(){
    this.authControlService.getLogout().subscribe(message => console.log(message));
  }
}
