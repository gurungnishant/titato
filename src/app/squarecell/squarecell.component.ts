import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squarecell',
  templateUrl: './squarecell.component.html',
  styleUrls: ['./squarecell.component.scss']
})
export class SquarecellComponent implements OnInit {
  

  constructor() {
  }
  ngOnInit(): void {
  }

@Input() value = '';
@Input() winnerFound: String = '';



//this part of code is to address disabling the remaining buttons on board when winner is found
//still pending
check (){
  if(this.winnerFound == 'O'|| this.winnerFound == 'X'){
    return true;
  }
  else return false;
}


}