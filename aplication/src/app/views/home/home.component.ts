import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../models-services/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routUrl: '/home'
    }
  }

  ngOnInit(): void {
  }

}
