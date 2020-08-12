import { Component, OnInit } from '@angular/core';
import { Invoices } from './../../models-project/Invoices';
import { FactureService } from './../../models-services/facture/facture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-invoice-delete',
  templateUrl: './invoice-delete.component.html',
  styleUrls: ['./invoice-delete.component.css']
})
export class InvoiceDeleteComponent implements OnInit {

  
  invoice:Invoices

  constructor(private factureService:FactureService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') //+ converter o id para valor numerico
    this.factureService.readById(id).subscribe(invoice =>{
      this.invoice = invoice
    })
  }

  deleteInvoice():void{
    this.factureService.delete(this.invoice.id).subscribe(() =>{
      this.factureService.showMessage('Successfully!')
      this.router.navigate(['/invoices'])
    })
  }

  cancel():void{
    this.router.navigate(['/invoices'])
  }

}
