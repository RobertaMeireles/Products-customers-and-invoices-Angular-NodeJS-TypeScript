import { Component, OnInit, Input , Output } from '@angular/core';
import { Product } from 'src/app/models-project/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // variavel para guardar os produtos vindo do resolver
  products: Product[]
  // variavel para o cabeçalho da tabela
  displayedColumns = ['id','descricao','preco','action']

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.data.subscribe(data =>{
        this.products = data['productsResolver']['products']
      })
  }

}
