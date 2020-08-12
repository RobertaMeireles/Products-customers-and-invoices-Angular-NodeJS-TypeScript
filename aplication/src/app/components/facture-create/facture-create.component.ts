import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Invoices } from './../../models-project/Invoices';
import { Product } from './../../models-project/Product'
import { Customer } from './../../models-project/Customer';
import { FactureService } from './../../models-services/facture/facture.service';
import { LineInvoice } from './../../models-project/LineInvoice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements OnInit {

  // variaveis para receber o customer e o produto selecionado pelo utilizador
  selectedUser: string;
  selectedProduct: string;

  // variaveis para armazenar os products and customers vindo do resolver para alimentar os selects
  products: Product[];
  customers: Customer[];

  constructor(private invoiceService: FactureService, 
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.customers = data['customersResolver']['customers']
      this.products = data['productsResolver']['products']
    })
  }


/* CREATEINVOICE
  Metodo que recebe a quantidade pelo HTMLInputElement e o customer e o produto pelo 
  ngModel. 
    let lineInvoices = [] // Criada um array em branco para armazenar 
    lineInvoices.push(new LineInvoice(this.products.find(p => p.designacao == this.selectedProduct).id,Number(selectedQuantity.value))) //armazenar no array em branco lineInvoices o id do produto e a quantidade informada pelo usuário
    const x = new Invoices(null, //enviar para o serviço o id da invoice nulo, base de dados cria
                          null, // enviar para o serviço a data nulo, base de dados cria
                          this.customers.find(u => u.nome == this.selectedUser).id, //enviar para o serviço o id do customer selecionado
                          lineInvoices  //enviar o array de lineInvoices alimentado acima com as linhas recebidas.
                          )
    this.invoiceService.create(x).subscribe(()=>{ // enviar o objeto criado acima (chamado x) para o serviço, onde indica todo o invoice para cadastro na base de dados. */
  createInvoice(selectedQuantity:HTMLInputElement): void{
      let lineInvoices = []
      lineInvoices.push(new LineInvoice(this.products.find(p => p.designacao == this.selectedProduct).id,Number(selectedQuantity.value)))
      const x = new Invoices(null, 
                             null, 
                             this.customers.find(u => u.nome == this.selectedUser).id, 
                             lineInvoices  
                             )
      this.invoiceService.create(x).subscribe(()=>{
      this.invoiceService.showMessage('Successfully!');
      this.router.navigate(['/invoices']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }
}
