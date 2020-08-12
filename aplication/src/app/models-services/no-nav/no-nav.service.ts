import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoNavService {

  showNavbar:boolean = true;

  changeShowNavbar(){
    this.showNavbar = !this.showNavbar
  }

  userAuthenticated: boolean = false;

  showNavBarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { 

  }
}
