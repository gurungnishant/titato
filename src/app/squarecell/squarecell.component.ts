import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-squarecell',
  templateUrl: './squarecell.component.html',
  styleUrls: ['./squarecell.component.scss']
})
export class SquarecellComponent implements OnInit {
  users = {
    player1name: 'player1', player1symbol: 'A',
    player2name: 'player2', player2symbol: 'B' ,
    player3name: 'player3', player3symbol: 'C' ,
    player4name: 'player4', player4symbol: 'D',
    selectedmode: 'ffa', selected : '3'
  };


  constructor(private data: DataService) {
  }



  ngOnInit(): void {
    this.data.currentMessage.subscribe(users => this.users = users)
    console.log("play1 symbol"+ this.users.player1symbol);
  }

@Input() value = '';
@Input() winnerFound: String = '';




//this part of code is to address disabling the remaining buttons on board when winner is found
//still pending
check (){
  if(this.winnerFound == this.users.player1symbol|| this.winnerFound == this.users.player1symbol|| this.winnerFound == this.users.player1symbol|| this.winnerFound == this.users.player1symbol){
    return true;
  }
  else return false;
}


}