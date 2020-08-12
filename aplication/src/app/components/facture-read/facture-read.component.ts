import { Component, OnInit, Input } from '@angular/core';
import { Invoices } from './../../models-project/Invoices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture-read',
  templateUrl: './facture-read.component.html',
  styleUrls: ['./facture-read.component.css']
})
export class FactureReadComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  // variavel para guardar os customers vindo do resolver
  invoices: Invoices;
  // variavel para o cabeçalho da tabela
  displayedColumns = ['id','customer','action']


  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.invoices = data['invoicesResolver']['invoices']
    })
  }
} 