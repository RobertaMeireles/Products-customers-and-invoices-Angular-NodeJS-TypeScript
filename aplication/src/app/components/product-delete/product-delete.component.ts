import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../models-services/product/product.service';
import { Product } from './../../models-project/Product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  /* variavel para guardar o produto vindo do resolver, enviar para o base de 
  dados no metodo deleteProduct o produto que deseja ser excluido e escrever na 
  tela o produto através do product. */
  product: Product

  constructor(private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { }

    
  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.product = data['productByIdResolver']['product']
    })
  }


  deleteProduct(){
    this.productService.delete(this.product).subscribe(() =>{
      this.productService.showMessage('Successfully!')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
