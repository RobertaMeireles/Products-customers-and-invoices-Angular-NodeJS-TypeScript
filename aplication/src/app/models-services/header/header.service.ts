import { Injectable } from '@angular/core';
import { HeaderData } from './../../models-project/HeaderData';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from './../../components/template/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //new object
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Home',
    icon: 'home',
    routUrl: '/home'
  })

  constructor() { }

  //get
  get headerData():HeaderData {
    return this._headerData.value
  }

  //set
  set headerData(headerData:HeaderData){
    this._headerData.next(headerData)
  }
}
