import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../models-services/login/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  // metodo para aparecer assim que logar
  ngOnInit(){
    this.shownav();
  }

  // se o usuário não estiver logado não apresenta a nav
  shownav(){
    if(this.loginService.loggedUser != null){
        return true;      
    }else{
      return false;
    }
  }
}