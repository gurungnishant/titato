import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {




  public personObject: BehaviorSubject<any> =
    new BehaviorSubject<any>({
      player1name: 'default name 1  ', player1symbol: 'A',
      player2name: 'default name 2  ', player2symbol: 'B' ,
      player3name: 'default name 3  ', player3symbol: 'C' ,
      player4name: 'default name 4  ', player4symbol: 'D',
      selectedmode: 'ffa', selected : '3'
    });
    

  currentMessage = this.personObject.asObservable();


 // private messageSource = new BehaviorSubject<string>("default message"); 
  
  //currentMessage = this.messageSource.asObservable();


  constructor() { }


  changeMessage(message: any){
    this.personObject.next(message);
  }




}
