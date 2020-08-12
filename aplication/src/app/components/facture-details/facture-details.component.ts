import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoices } from './../../models-project/Invoices';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {

  invoice:Invoices;
  // variavel para guardar os customers vindo do resolver
  displayedColumns = ['Product','Quantity']

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.invoice = data['invoiceByIdResolver']['invoice']
    })
  }

}
