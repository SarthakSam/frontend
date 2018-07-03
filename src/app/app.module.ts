import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HttpClientModule} from "@angular/common/http";
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  {path: 'mainpage', component: MainpageComponent, children: [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'addbook', component: AddBookComponent}
  ]}
];



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SignupComponent,
    SigninComponent,
    AddBookComponent,
    FileSelectDirective
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
