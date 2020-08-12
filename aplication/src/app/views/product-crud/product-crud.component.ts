import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { HeaderService } from './../../models-services/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //necessario devido a necessidade de mudar de rota ao clicar no botão
  constructor(private router:Router,
              private headerService: HeaderService) { 
                headerService.headerData = {
                  title: 'Products',
                  icon: 'storefront',
                  routUrl: '/products'
                }
}

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/product/create'])
  }

}
