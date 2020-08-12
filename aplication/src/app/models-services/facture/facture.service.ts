import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Invoices } from './../../models-project/Invoices';
import { Observable,EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FactureService {

  //VARIAVEL
  baseUrl = 'http://localhost:3000/';

  constructor(private snackBar: MatSnackBar,
    private http:HttpClient) { }


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

  //METODO PARA SALVAR OS ITENS INVOICE NA BASE DE DADOS
  //Vai retornar um observable do tipo produto
  create(invoices:Invoices):Observable<Invoices>{
      return this.http.post<Invoices>(this.baseUrl+"api/invoices",invoices).pipe(
        map((obj) => obj),
        catchError((e) =>this.errorHandler(e))
        )
  }

  //METODO COM A FUNÇÃO DE EXIBIR O INVOICES NA TELA
  read():Observable<Invoices[]>{
    return this.http.get<Invoices[]>(this.baseUrl+"api/invoices").pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO COM A FUNÇÃO DE EXIBIR UM INVOICE NA TELA
  readById(id:number):Observable<Invoices>{
    const url = `${this.baseUrl+"api/invoices/id"}/${id}`
    return this.http.get<Invoices>(url).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }


  //METODO COM A FUNÇAO DE DELETAR UM INVOICE DA BASE DE DADOS
  delete(id:number):Observable<Invoices>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Invoices>(url).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO PARA TRATAR ERRO, QUE VEM DO METODO PIPE DOS METODOS ACIMA
  errorHandler(e:any):Observable<any>{ //como ocorreu um erro vai retornar um observable vazio
    console.log(e)
    this.showMessage('Erro!', true) //true para ficar com a msg vermelha
    return EMPTY 
  }

}

