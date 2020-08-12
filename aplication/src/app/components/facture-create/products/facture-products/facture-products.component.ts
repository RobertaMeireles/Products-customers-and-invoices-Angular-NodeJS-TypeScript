import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../models-project/Product';
import { ProductService } from './../../../../models-services/product/product.service';

@Component({
  selector: 'app-facture-products',
  templateUrl: './facture-products.component.html',
  styleUrls: ['./facture-products.component.css']
})
export class FactureProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  @Input() products:Product[];

  ngOnInit(): void {

  }

}
