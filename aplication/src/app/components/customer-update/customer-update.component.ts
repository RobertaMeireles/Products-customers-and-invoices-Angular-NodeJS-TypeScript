import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/models-services/customer/customer.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models-project/Customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  /* variavel para guardar o customer vindo do resolver, enviar para o base de 
  dados no metodo updateCustomer o customer que deseja ser excluido e escrever na 
  tela o produto através do customer. */
  customer:Customer

  constructor(private customerService:CustomerService,
              private router:Router,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.customer = data['customerByIdResolver']['customer']
    })
  }

  updateCustomer():void{
    this.customerService.update(this.customer).subscribe(() =>{
    this.customerService.showMessage('Successfully')
    this.router.navigate(['/customers'])
    })
  }

  cancel():void{
    this.router.navigate(['/customers'])
  }

}
