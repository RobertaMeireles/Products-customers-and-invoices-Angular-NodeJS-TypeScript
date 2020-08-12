import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../../models-services/header/header.service';
import { LoginService } from './../../../models-services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService,
            private loginService:LoginService,
            private router:Router) { }

  ngOnInit(): void {
    this.shownav();
  }

  get title(): string{
    return this.headerService.headerData.title
  }

  get icon(): string{
    return this.headerService.headerData.icon
  }

  get routUrl():string{
    return this.headerService.headerData.routUrl
  }

  shownav(){
    if(this.loginService.loggedUser != null){
        return true;      
    }else{
      return false;
    }
  }
  
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginService.decodedToken = null;
    this.loginService.loggedUser = null;
    this.router.navigate(['/'])
  }



}
