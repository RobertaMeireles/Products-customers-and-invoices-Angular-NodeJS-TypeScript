import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './../../models-services/header/header.service';

@Component({
  selector: 'app-customers-crud',
  templateUrl: './customers-crud.component.html',
  styleUrls: ['./customers-crud.component.css']
})
export class CustomersCrudComponent implements OnInit {

  //necessario devido a necessidade de mudar de rota ao clicar no botão
  constructor(private router:Router,
            private headerService:HeaderService) { 
            headerService.headerData = {
            title: 'Customers',
            icon: 'mood',
            routUrl: '/customers'
      }
  }

  ngOnInit(): void {
  }

  navigateToCustomersCreate(){
    this.router.navigate(['/customer/create'])
  }
 
}

