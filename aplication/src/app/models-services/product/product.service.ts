import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //msg avisando que foi cadastrado
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models-project/Product';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



 
@Injectable({
  providedIn: 'root'
})

export class ProductService {

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


  //METODO COM A FUNÇÃO DE INSERIR O PRODUTO NO BACKEND
  //Vai retornar um observable do tipo produto
  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl+'api/products',product).pipe(
    map((obj) => obj),
    catchError((e) =>this.errorHandler(e))
    )
  }

  //METODO COM A FUNÇÃO DE EXIBIR O PRODUTO NA TELA
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"api/products")
  }


  //METODO COM A FUNÇÃO DE EXIBIR UM PRODUTO NA TELA
  readById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+"api/products/id/"+id)
  }

  //METODO COM A FUNÇÃO DE ATUALIZAR UM PRODUTO NA BASE DE DADOS
  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl+"api/products/update"}/${product.id}`
    return this.http.put<Product>(url,product).pipe(
      map((obj)=>obj),
      catchError((e) =>this.errorHandler(e))
    )
  }

  //METODO COM A FUNÇÃO DE EXCLUIR O PRODUTO
  delete(product:Product):Observable<Product>{
    const url = `${this.baseUrl+"api/products/delete"}/${product.id}`
    return this.http.put<Product>(url,product).pipe(
      map((obj)=>obj),
      catchError((e) =>this.errorHandler(e))
    )
  }

  //METODO PARA TRATAR ERRO, QUE VEM DO METODO PIPE DOS METODOS ACIMA
  errorHandler(e:any):Observable<any>{ //como ocorreu um erro vai retornar um observable vazio~
    this.showMessage('Erro!', true) //true para ficar com a msg vermelha
    return EMPTY 
  }
}
