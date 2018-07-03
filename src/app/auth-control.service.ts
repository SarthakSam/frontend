import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthControlService {

  constructor(private http: HttpClient) { }

  postSignUp(user: User): Observable<User>{
    console.log("making post request to signup")
    return this.http.post<User>('/signup',user,httpOptions);
  }

  postSignIn(obj){
     console.log("making post request to signin");
     return this.http.post('/signin',obj,httpOptions);
  }

  getLogout(){
    console.log("logging out")
    return this.http.get('/logout');
  }

  // provideData() {
  //   console.log("in provideData")
  //   return this.http.get('/signup',{responseType: 'text'});
  // }

}
