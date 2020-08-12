import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './../../models-project/Customer';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  // variavel para guardar os customers vindo do resolver
  customers: Customer[] 
  // variavel para o cabeçalho da tabela
  displayedColumns = ['id','nome','idade','action']

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.customers = data['customersResolver']['customers']
  })
}


}
