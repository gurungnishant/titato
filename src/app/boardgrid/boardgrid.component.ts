import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boardgrid',
  templateUrl: './boardgrid.component.html',
  styleUrls: ['./boardgrid.component.scss']
})
export class BoardgridComponent implements OnInit {
  squares : any[] = [];
  xIsNext: boolean = false;
  winner : any = null;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  //reset the board
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }


  /*
  if array value is not initalized
  splice the current get player value in that index
  set xIsNext state to opposite F-> T || T -> F
  so O can play or X can play
  
  */
  makeMove(idx : number) {
    if(!this.squares[idx]){
      this.squares.splice(idx, 1 , this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }


/*
const lines= all possible winning moves represented
in index 0 - 8
if all three indexes contain same value 
return winner value which is X or O
then this.winner is initialized and announced in UI
else return null
*/


  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }





}
