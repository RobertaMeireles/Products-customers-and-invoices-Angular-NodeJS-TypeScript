import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models-project/Customer';
import { CustomerService } from 'src/app/models-services/customer/customer.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  /* variavel para guardar o customer vindo do resolver, enviar para o base de 
  dados no metodo deleteCustomer o customer que deseja ser excluido e escrever na 
  tela o customer através do customer. */
  customer:Customer

  constructor(private customerService:CustomerService,
              private router:Router,
              private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.customer = data['customerByIdResolver']['customer']
    })
  }
 
  deleteCustomer(){
    this.customerService.delete(this.customer).subscribe(()=>{
      this.customerService.showMessage('Successfully!')
      this.router.navigate(['/customers'])
    })
  }

  cancel():void{
    this.router.navigate(['/customers'])
  }

}
