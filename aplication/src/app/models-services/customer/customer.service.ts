import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../../models-project/Customer';
import { Observable,EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //VARIAVEL
  baseURL = 'http://localhost:3000/';

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }


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

  

  //METODO COM A FUNÇÃO DE INSERIR O CUSTOMER NO BACKEND
  //Vai retornar um observable do tipo produto
  create(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.baseURL+"api/customers",customer).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO COM A FUNÇÃO DE EXIBIR O CUSTOMERS NA TELA
  read():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseURL+"api/customers").pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO COM A FUNÇÃO DE EXIBIR UM CUSTOMER NA TELA
  readById(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.baseURL+"api/customers/id/"+id)
  }

  //METODO COM A FUNÇÃO DE ATUALIZAR UM CUSTOMER NA BASE DE DADOS
  update(customer:Customer):Observable<Customer>{
    const url = `${this.baseURL+"api/customers/update"}/${customer.id}`
    return this.http.put<Customer>(url,customer).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO COM A FUNÇÃO DE EXCLUIR O PRODUTO
  delete(customer:Customer):Observable<Customer>{
    const url = `${this.baseURL+"api/customers/delete"}/${customer.id}`
    return this.http.put<Customer>(url,customer).pipe(
      map((obj) => obj),
      catchError((e) =>this.errorHandler(e))
      )
  }

  //METODO PARA TRATAR ERRO, QUE VEM DO METODO PIPE DOS METODOS ACIMA
  errorHandler(e:any):Observable<any>{ //como ocorreu um erro vai retornar um observable vazio
    this.showMessage('Erro!', true) //true para ficar com a msg vermelha
    return EMPTY 
  }
}
