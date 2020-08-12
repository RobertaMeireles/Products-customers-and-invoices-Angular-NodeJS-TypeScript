import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './../../models-services/header/header.service';

@Component({
  selector: 'app-facture-crud',
  templateUrl: './facture-crud.component.html',
  styleUrls: ['./facture-crud.component.css']
})
export class FactureCrudComponent implements OnInit {

  constructor(private router: Router,
            private headerService: HeaderService) { 
              headerService.headerData = {
              title: 'Invoices',
              icon: 'local_grocery_store',
              routUrl: '/invoices'
              }
  }

  ngOnInit(): void {
  }

  navigateToInvoiceCreate(){
    this.router.navigate(['/invoices/create'])
  }

}
