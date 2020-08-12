import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models-project/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,
              private snackBar: MatSnackBar) { }

  //VARIAVEL
  baseURL = 'http://localhost:3000/';

    //METODO PARA APRESENTAR MENSAGEM AVISANDO QUE FOI FEITO O CADASTRO/MODIFICAÇÃO DO PRODUTO
    //usando a variavel criada no construtor e utilizando o metodo open do materalize do MatSnackBarModule
    showMessage(msg: string, isError:boolean = false): void{
      this.snackBar.open(msg,'X',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    }
  
  
    //METODO COM A FUNÇÃO DE INSERIR O PRODUTO NO BACKEND
    //Vai retornar um observable do tipo produto
    create(user:User):Observable<User>{
      return this.http.post<User>(this.baseURL+"api/auth/signup",user).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
    }

    //METODO PARA TRATAR ERRO, QUE VEM DO METODO PIPE DOS METODOS ACIMA
    errorHandler(e:any):Observable<any>{ //como ocorreu um erro vai retornar um observable vazio~
    this.showMessage('Erro!', true) //true para ficar com a msg vermelha
    return EMPTY 
  }
  

}
