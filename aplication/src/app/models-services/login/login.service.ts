import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './../register/register.service';
import { User } from './../../models-project/User';
import { map } from 'rxjs/operators';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private registerService: RegisterService,
              private http:HttpClient) {}

  // SERVICE TO HANDLE TOKEN
  jwtHelper = new JwtHelperService();
  decodedToken:any;

  loggedUser:User= null;
  baseURL = 'http://localhost:3000/';


  // LOGIN
  tryLogin(loginData:any){
    console.log(loginData)
    return this.http.post(this.baseURL + 'api/auth/login',loginData )
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.loggedUser = this.decodedToken
        }
      })
    );
  }

  // TOKEN
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
