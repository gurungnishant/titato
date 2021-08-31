import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boardgrid',
  templateUrl: './boardgrid.component.html',
  styleUrls: ['./boardgrid.component.scss']
})
export class BoardgridComponent implements OnInit {
  squares : any[] = [];
  boxBoard : any[] = [];


  xIsNext: boolean = false;
  aPlayer : boolean = true; 
  bPlayer : boolean = false; 
  cPlayer : boolean = false; 
  dPlayer : boolean = false;
  winner : any = null;
  draw : boolean = false;


  rows = 5;
  columns = 5;

  new2DBoard(){
    for (let i = 0; i < this.rows; i++){
        this.boxBoard[i] = [];
        for (let j = 0; j < this.columns; j++){
          this.boxBoard[i][j] = null;
        }
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.newGame();
    this.new2DBoard();
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
    this.new2DBoard();
    //this.testrun();
  }

testrun(){
  for (let i = 0; i < this.rows; i++){
    for (let j = 0; j < this.columns; j++){
      console.log(this.boxBoard[i][j]);
    }
  }
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

    }
    else if(!this.squares[idx] &&  this.bPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.bPlayer = !this.bPlayer;
      this.cPlayer = !this.cPlayer;

    } 
    else if(!this.squares[idx] &&  this.cPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.cPlayer = !this.cPlayer;
      this.dPlayer = !this.dPlayer;

    }
    else if(!this.squares[idx] &&  this.dPlayer == true ){
      this.squares.splice(idx, 1 , this.player);
      this.dPlayer = !this.dPlayer;
      this.aPlayer = !this.aPlayer;

    }
    this.winner = this.calculateWinner();
    this.draw = this.drawCheck();

  }



  makeMove2(i : number, j : number) {
    if(!this.boxBoard[i][j] &&  this.aPlayer == true ){
      this.boxBoard[i].splice(j, 1 , this.player);
      this.aPlayer = !this.aPlayer;
      this.bPlayer = !this.bPlayer;
    }
    else if(!this.boxBoard[i][j] &&  this.bPlayer == true ){
      this.boxBoard[i].splice(j, 1 , this.player);
      this.bPlayer = !this.bPlayer;
      this.cPlayer = !this.cPlayer;
    }
    else if(!this.boxBoard[i][j] &&  this.cPlayer == true ){
      this.boxBoard[i].splice(j, 1 , this.player);
      this.cPlayer = !this.cPlayer;
      this.dPlayer = !this.dPlayer;
    }
    else if(!this.boxBoard[i][j] &&  this.dPlayer == true ){
      this.boxBoard[i].splice(j, 1 , this.player);
      this.dPlayer = !this.dPlayer;
      this.aPlayer = !this.aPlayer;
    }


    this.winner = this.calculateWinner2(i, j);
    this.draw = this.drawCheck();

  }


  
  queue:any = [];

  calculateWinner2(i : number, j : number) {
      
      // if (x - 1 >= 0 && image[x - 1][y] === color) queue.push([x - 1, y]);
      // if (y - 1 >= 0 && image[x][y - 1] === color) queue.push([x, y - 1]);
      // if (x + 1 < image.length && image[x + 1][y] === color) queue.push([x + 1, y]);
      // if (y + 1 < image[0].length && image[x][y + 1] === color) queue.push([x, y + 1]);


 //outer field     
      //top
      if ( i-1 >=0 && this.boxBoard[i-1][j] === this.boxBoard[i][j]) {
        if ( i-2 >= 0 && this.boxBoard[i-2][j] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
        if ( i+1 < this.rows && this.boxBoard[i+1][j] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
      }
      //bot
      if ( i+1 < this.rows && this.boxBoard[i+1][j] === this.boxBoard[i][j]) {
        if ( i+2 < this.rows && this.boxBoard[i+2][j] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
      }



    //left
    if ( j-1 >= 0 && this.boxBoard[i][j-1] === this.boxBoard[i][j]) {
      if ( j-2 >= 0 && this.boxBoard[i][j-2] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
      if ( j+1 < this.columns && this.boxBoard[i][j+1] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }


    //right
    if ( j+1 < this.columns && this.boxBoard[i][j+1] === this.boxBoard[i][j]) {
      if ( j+2 < this.columns && this.boxBoard[i][j+2] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }

    

//upleft

//upright

//downleft

//downright


//inner field




  return null;
  }





  

 



    
/*
    
          0 1 2 3 4 
          5 6 7 8 9 


      
*/
    
    
  










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





  drawCheck(){
    for (let j = 0; j < this.squares.length; j++) {
      if(!this.squares[j]){
        return false;
    }
  }
  return true;
}








}
