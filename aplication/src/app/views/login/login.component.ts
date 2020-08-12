import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../models-services/login/login.service';
import { Router } from '@angular/router';
import { RegisterService } from './../../models-services/register/register.service';
import { User } from './../../models-project/User';
import { NoNavService } from './../../models-services/no-nav/no-nav.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router:Router,
              private registerService:RegisterService,
              private noNavService: NoNavService)  { }

  // VARIABLES
  loginData: any = {};
  errorMessage: string;
  users:User[]=null;

  // SHOW NAVBAR IN VIEW
  ngOnInit(): void {
    this.noNavService.changeShowNavbar()
  }

  // SHOW CORRECT NAVIBAR TO USER
  showNavbarCorrect(){
    if(this.loginService.loggedUser){
      this.noNavService.changeShowNavbar()
      this.router.navigate(['home'])
    }else{
      this.errorMessage = 'Incorrect login';
    }
  }

  // LOGIN
  doLogin(){
    console.log("entrei")
    this.loginService.tryLogin(this.loginData).subscribe(() => {this.showNavbarCorrect()})
  }

}
