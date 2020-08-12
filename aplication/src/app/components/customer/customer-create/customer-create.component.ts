import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './../../../models-project/Customer';
import { CustomerService } from 'src/app/models-services/customer/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  /* variavel para ser criado o cliente apartir das informações que o usuário inserir no formulário
  alimentado o objeto apartir do ngModel.*/
  customer: Customer={
    nome:'',
    idade:null,
    morada:'',
    cod_postal:null,
  }

  constructor(private router:Router, 
              private customerService: CustomerService ) { }

  ngOnInit(): void {
  }

  
  createCustomer(){
    this.customerService.create(this.customer).subscribe(()=>{
    this.customerService.showMessage('Successfully!')
    this.router.navigate(['/customers'])
    })
      
  }

 
  cancel() :void{
    this.router.navigate(['/customers']);

  }
}
