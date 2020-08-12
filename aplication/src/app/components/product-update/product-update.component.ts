import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../models-services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../models-project/Product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  /* variavel para guardar o product vindo do resolver, enviar para o base de 
  dados no metodo updateProduct o product que deseja ser excluido e escrever na 
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

  updateProduct():void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Successfully')
      this.router.navigate(['/products'] )
    })
  }

  cancel():void{
    this.router.navigate(['/products'] )

  }

}
