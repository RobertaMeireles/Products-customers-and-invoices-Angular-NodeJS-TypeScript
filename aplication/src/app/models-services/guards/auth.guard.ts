import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, 
             private router: Router) {}

  // Se o usuário estiver logado true, se nao rediciona para o /. indicar o metodo nas rotas
  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (this.loginService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}