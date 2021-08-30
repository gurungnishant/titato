import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boardgrid',
  templateUrl: './boardgrid.component.html',
  styleUrls: ['./boardgrid.component.scss']
})
export class BoardgridComponent implements OnInit {
  squares : any[] = [];
  xIsNext: boolean = false;
  aPlayer : boolean = true; 
  bPlayer : boolean = false; 
  cPlayer : boolean = false; 
  dPlayer : boolean = false; 

  winner : any = null;
  draw : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  //reset the board
  newGame(){
    this.squares = Array(25).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.draw = false;
    this.aPlayer  = true; 
    this.bPlayer = false; 
    this.cPlayer  = false; 
    this.dPlayer = false; 
  }

  get player(){
    if(this.aPlayer){
      return 'A';
    }
    else if (this.bPlayer){
      return 'B';
    }
    else if (this.cPlayer){
      return 'C';
    }
    else if (this.dPlayer){
      return 'D';
    }
  return '-1'; 
  }


  /*
  if array value is not initalized
  splice the current get player value in that index
  set xIsNext state to opposite F-> T || T -> F
  so O can play or X can play
  
  */
  makeMove(idx : number) {
    if(!this.squares[idx] &&  this.aPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.aPlayer = !this.aPlayer;
      this.bPlayer = !this.bPlayer;
      // console.log(" aplayer "+this.aPlayer);
      // console.log(" bplayer "+this.bPlayer);

    }
    else if(!this.squares[idx] &&  this.bPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.bPlayer = !this.bPlayer;
      this.cPlayer = !this.cPlayer;
      // console.log(" bplayer "+this.bPlayer);
      // console.log(" cplayer "+this.cPlayer);

    } 
    else if(!this.squares[idx] &&  this.cPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.cPlayer = !this.cPlayer;
      this.dPlayer = !this.dPlayer;
      // console.log(" cplayer "+this.cPlayer);
      // console.log(" dplayer "+this.dPlayer);

    }
    else if(!this.squares[idx] &&  this.dPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.dPlayer = !this.dPlayer;
      this.aPlayer = !this.aPlayer;
      // console.log(" dplayer "+this.dPlayer);
      // console.log(" aplayer "+this.aPlayer);

    }
    this.winner = this.calculateWinner();
    this.draw = this.drawCheck();

  }

  drawCheck(){
    for (let j = 0; j < this.squares.length; j++) {
      if(!this.squares[j]){
        return false;
    }
  }
  return true;
}


/*
const lines= all possible winning moves represented
in index 0 - 8
if all three indexes contain same value 
return winner value which is X or O
then this.winner is initialized and announced in UI
else return null

0   1   2   3    4
5   6   7   8    9
10  11  12  13   14
15  16  17  18   19 
20  21  22  23   24


*/

  calculateWinner() {
    const lines = [
      //rows
      [0, 1, 2],[1, 2, 3],[2, 3, 4],
      [5, 6, 7],[6, 7, 8],[7, 8, 9],
      [10, 11, 12],[11, 12, 13],[12, 13, 14],
      [15, 16, 17], [16, 17, 18], [17, 18, 19],
      [20, 21, 22],[21, 22, 23],[22, 23, 24],

      //columns
      [0, 5, 10],[5, 10, 15],[10, 15, 20],
      [1, 6, 11],[6, 11, 16],[11, 16, 21],
      [2, 7, 12],[7, 12, 22],[12, 17, 22],
      [3, 8, 13],[8, 13, 18],[13, 18, 23],
      [4, 9, 14],[9, 14, 19],[14, 19, 24],

      //diagonals
      [10, 16, 22],
      [5, 11, 17],[11, 17, 23],
      [0, 6, 12],[6, 12, 18],[12, 18, 24],
      [1, 7, 13],[7, 13, 19],
      [2, 8, 14]
      
  
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log(" "+a);
      // console.log(" "+b);
      // console.log(" "+c);

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        console.log("winner")
        return this.squares[a];
      }
    }
    return null;
  }












  



}
