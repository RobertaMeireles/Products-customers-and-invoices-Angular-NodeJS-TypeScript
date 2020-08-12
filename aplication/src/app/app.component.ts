import { Component } from '@angular/core';
import { LoginService } from './models-services/login/login.service';

import { NoNavService } from './models-services/no-nav/no-nav.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { User } from './models-project/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //title = 'products';  

  //VARIVEL PARA O TOKEN
  jwtHelper = new JwtHelperService();

  //VARIABLE PARA NAVBAR
  showNavbar: boolean = false

  constructor(private noNavService:NoNavService,
              private loginService:LoginService){
  }


  /* VERIFICA SE O ARMAZENAMENTO LOCAL TEM UM TOKEN E UM USUÁRIO. SE SIM, ATUALIZE ESSES VALORES
  NO SERVIÇO DE LOGIN PARA SER USADO EM TODO O SISTEMA (O USUÁRIO AINDA ESTÁ LOGIN NO SISTEMA)*/
  ngOnInit(){
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (token) {
      this.loginService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.loginService.loggedUser= user;
    }
      
    this.noNavService.showNavBarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }
}
