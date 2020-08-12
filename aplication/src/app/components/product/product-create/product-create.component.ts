import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../models-services/product/product.service';
import { Router } from '@angular/router';
import { Product } from './../../../models-project/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

      /* variavel para ser criado o produto apartir das informações que o usuário inserir no formulário
      alimentado o objeto apartir do ngModel.*/
      product: Product = {
      designacao:'',
      descricao:'',
      preco:null,
      id_categoria:null
    }

  constructor(private productService: ProductService, 
              private router:Router) { }

  ngOnInit(): void {
   
  }


  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Successfully!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
