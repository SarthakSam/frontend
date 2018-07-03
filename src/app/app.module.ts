import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  {path: 'mainpage', component: MainpageComponent, children: [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
  ]}
];



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
