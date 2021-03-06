import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PlaymenuComponent } from '../playmenu/playmenu.component'
import { DataService } from '../data.service';

@Component({
  selector: 'app-boardgrid',
  templateUrl: './boardgrid.component.html',
  styleUrls: ['./boardgrid.component.scss']
})
export class BoardgridComponent implements OnInit {
  squares : any[] = [];
  boxBoard : any[] = [];
  turnCounter:number = 0;


  xIsNext: boolean = false;
  aPlayer : boolean = true; 
  bPlayer : boolean = false; 
  cPlayer : boolean = false; 
  dPlayer : boolean = false;
  winner : any = null;
  winnername :any=null;
  draw : boolean = false;


  users = {
    player1name: 'player1', player1symbol: 'A',
    player2name: 'player2', player2symbol: 'B' ,
    player3name: 'player3', player3symbol: 'C' ,
    player4name: 'player4', player4symbol: 'D',
    selectedmode: 'ffa', selected : '3'
    
  };

  constructor(public dialog: MatDialog, private data: DataService) { }


  openplaymenu() {
    this.dialog.open(PlaymenuComponent, {width: '700px', height: '650px'});
  }

  selected : string = '3';
  selectedmode : string = 'ffa';

  ngOnInit(): void {
    this.newGame();
    this.new2DBoard();

    this.data.currentMessage.subscribe(users => this.users = users)

  }


  // p1name: string = 'A';
  // p2name: string = 'B';
  // p3name: string = 'C';
  // p4name: string = 'D';

  p1name: string = this.users.player1symbol;
  p2name: string = this.users.player2symbol;
  p3name: string = this.users.player3symbol;
  p4name: string = this.users.player4symbol;





  rows = 5;
  columns = 5;

  // selected : string = '';
  // selectedmode : string = 'ffa';
  // selectednum: number = 3;

  // selectChangehandler(event : any){
  //   this.selected = event.target.value;
  //   this.selectednum = +this.selected;
  // } 

  // selectChangehandlermode(event : any){
  //   this.selectedmode = event.target.value;
  // } 


  new2DBoard(){
    for (let i = 0; i < this.rows; i++){
        this.boxBoard[i] = [];
        for (let j = 0; j < this.columns; j++){
          this.boxBoard[i][j] = null;
        }
    }
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
    this.winnername = null;
    this.new2DBoard();
    //this.testrun();
    this.turnCounter = 0;
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
      return this.users.player1name;
    }
    else if (this.bPlayer){
      return this.users.player2name;
    }
    else if (this.cPlayer){
      return this.users.player3name;
    }
    else if (this.dPlayer){
      return this.users.player4name;
    }
  return '-1'; 
  }


  get playersymbol(){
    if(this.aPlayer){
      return this.users.player1symbol;
    }
    else if (this.bPlayer){
      return this.users.player2symbol;
    }
    else if (this.cPlayer){
      return this.users.player3symbol;
    }
    else if (this.dPlayer){
      return this.users.player4symbol;
    }
  return '-1'; 
  }




  /*
  if array value is not initalized
  splice the current get player value in that index
  set xIsNext state to opposite F-> T || T -> F
  so O can play or X can play
  each player is his own team in a way of thinking
  */
  // makeMove(idx : number) {

  //   if(this.users.selectedmode === "ffa"){
  //     if(!this.squares[idx] &&  this.aPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);
        
  //       this.aPlayer = !this.aPlayer;
  //       this.bPlayer = !this.bPlayer;

  //     }
  //     else if(!this.squares[idx] &&  this.bPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);

  //       this.bPlayer = !this.bPlayer;
  //       this.cPlayer = !this.cPlayer;

  //     } 
  //     else if(!this.squares[idx] &&  this.cPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);
        
  //       this.cPlayer = !this.cPlayer;
  //       this.dPlayer = !this.dPlayer;

  //     }
  //     else if(!this.squares[idx] &&  this.dPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);
  //       this.dPlayer = !this.dPlayer;
  //       this.aPlayer = !this.aPlayer;
  //       this.turnCounter++;
  //     }
  //   }
  //   else {
  //     if(!this.squares[idx] &&  this.aPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);
  //       this.aPlayer = !this.aPlayer;
  //       this.bPlayer = !this.bPlayer;
  //     }
  //     else if(!this.squares[idx] &&  this.bPlayer == true ){
  //       this.squares.splice(idx, 1 , this.player);
  //       this.bPlayer = !this.bPlayer;
  //       this.aPlayer = !this.aPlayer;
  //       this.turnCounter++;
  //     } 
  //   }

  //   if(this.turnCounter >2){
  //   this.winner = this.calculateWinner();
  //   this.draw = this.drawCheck();
  //   }
  // }








  

  makeMove2(i : number, j : number) {
    if(this.users.selectedmode === "ffa"){
      if(!this.boxBoard[i][j] &&  this.aPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player1symbol);
        //console.log("this.player a  "+ this.users.player1symbol);
        this.aPlayer = !this.aPlayer;
        this.bPlayer = !this.bPlayer;
        //this.testrun();
      }
      else if(!this.boxBoard[i][j] &&  this.bPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player2symbol);
        //console.log("this.player  b "+ this.player);
        this.bPlayer = !this.bPlayer;
        this.cPlayer = !this.cPlayer;
      }
      else if(!this.boxBoard[i][j] &&  this.cPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player3symbol);
       // console.log("this.player  c "+ this.player);
        this.cPlayer = !this.cPlayer;
        this.dPlayer = !this.dPlayer;
      }
      else if(!this.boxBoard[i][j] &&  this.dPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player4symbol);
      //  console.log("this.player  d "+ this.player);
        this.dPlayer = !this.dPlayer;
        this.aPlayer = !this.aPlayer;
        this.turnCounter++;
      }
    }
    else {
      if(!this.boxBoard[i][j] &&  this.aPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player1symbol);
        this.aPlayer = !this.aPlayer;
        this.bPlayer = !this.bPlayer;
      }
      else if(!this.boxBoard[i][j] &&  this.bPlayer == true ){
        this.boxBoard[i].splice(j, 1 , this.users.player2symbol);
        this.bPlayer = !this.bPlayer;
        this.aPlayer = !this.aPlayer;
        this.turnCounter++;
      }
    }

   // if(this.turnCounter>=2){

      if(this.users.selected === '3'){
      this.winner = this.calculateWinner3(i, j);
        if(this.winner && this.winner === this.users.player1symbol){
          this.winnername = this.users.player1name;
        }
        if(this.winner && this.winner === this.users.player2symbol){
          this.winnername = this.users.player2name;
        }
        if(this.winner && this.winner === this.users.player3symbol){
          this.winnername = this.users.player3name;
        }
        if(this.winner && this.winner === this.users.player4symbol){
          this.winnername = this.users.player4name;
        }
      }
      if(this.users.selected === '4'){
        this.winner = this.calculateWinner4(i, j);
        if(this.winner && this.winner === this.users.player1symbol){
          this.winnername = this.users.player1name;
        }
        if(this.winner && this.winner === this.users.player2symbol){
          this.winnername = this.users.player2name;
        }
        if(this.winner && this.winner === this.users.player3symbol){
          this.winnername = this.users.player3name;
        }
        if(this.winner && this.winner === this.users.player4symbol){
          this.winnername = this.users.player4name;
        }

        }
      if(this.users.selected === '5'){
          this.winner = this.calculateWinner5(i, j);
          if(this.winner && this.winner === this.users.player1symbol){
            this.winnername = this.users.player1name;
          }
          if(this.winner && this.winner === this.users.player2symbol){
            this.winnername = this.users.player2name;
          }
          if(this.winner && this.winner === this.users.player3symbol){
            this.winnername = this.users.player3name;
          }
          if(this.winner && this.winner === this.users.player4symbol){
            this.winnername = this.users.player4name;
          }

        }
     // }
      this.draw = this.drawCheck();
  

  }






  
  queue:any = [];

  calculateWinner3(i : number, j : number) {
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

//upleft - //downright

    if ( i-1 >= 0 && j-1 >=0 && this.boxBoard[i-1][j-1] === this.boxBoard[i][j]) {
     
      if (i-2 >= 0 && j-2 >=0  && this.boxBoard[i-2][j-2] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }

      if ( i+1 < this.rows && j+1 <this.columns && this.boxBoard[i+1][j+1] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }
      
    if ( i+1 < this.rows && j+1 <this.columns && this.boxBoard[i+1][j+1] === this.boxBoard[i][j]) {
      if ( i+2 < this.rows && j+2 < this.columns && this.boxBoard[i+2][j+2] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }


//upright --  downleft
if ( i-1 >= 0 && j+1 <this.columns && this.boxBoard[i-1][j+1] === this.boxBoard[i][j]) {
     
  if (i-2 >= 0 && j+2 <=this.columns && this.boxBoard[i-2][j+2] === this.boxBoard[i][j]) {
    return this.boxBoard[i][j];
  }

  if ( i+1 < this.rows && j-1 >=0 && this.boxBoard[i+1][j-1] === this.boxBoard[i][j]) {
    return this.boxBoard[i][j];
  }
}
  
if ( i+1 < this.rows && j-1 >=0 && this.boxBoard[i+1][j-1] === this.boxBoard[i][j]) {
  if ( i+2 < this.rows && j-2 >=0  && this.boxBoard[i+2][j-2] === this.boxBoard[i][j]) {
    return this.boxBoard[i][j];
  }
}


  return null;
  }



  calculateWinner4(i : number, j : number) {
   //left - right check 
   //its weird but i is for columns
   if (i-1 >= 0 && this.boxBoard[i-1][j] === this.boxBoard[i][j]) {
      if (i-2 >= 0 && this.boxBoard[i-2][j] === this.boxBoard[i][j]) {
        if ( i-3 >= 0 && this.boxBoard[i-3][j] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
        if ( i+1 < this.rows && this.boxBoard[i+1][j] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
      }
      if (i+1 < this.rows && this.boxBoard[i+1][j] === this.boxBoard[i][j]) {
        if (i+2 < this.rows && this.boxBoard[i+2][j] === this.boxBoard[i][j]) {   
        return this.boxBoard[i][j];
      }
    }
  }

    if (i+1 < this.rows && this.boxBoard[i+1][j] === this.boxBoard[i][j]) {
      if (i+2 < this.rows && this.boxBoard[i+2][j] === this.boxBoard[i][j]) {   
        if (i+3 < this.rows && this.boxBoard[i+3][j] === this.boxBoard[i][j]) {   
          return this.boxBoard[i][j];  
        }
      }
    }

    //top down rows same length as columns so no need to change
    if (j-1 >= 0 && this.boxBoard[i][j-1] === this.boxBoard[i][j]) {
      if (j-2 >= 0 && this.boxBoard[i][j-2] === this.boxBoard[i][j]) {
        if ( j-3 >= 0 && this.boxBoard[i][j-3] === this.boxBoard[i][j]) {
          console.log("top checked");
          return this.boxBoard[i][j];
        }
        if ( j+1 < this.rows && this.boxBoard[i][j+1] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
      }
      if (j+1 < this.rows && this.boxBoard[i][j+1] === this.boxBoard[i][j]) {
        if (j+2 < this.rows && this.boxBoard[i][j+2] === this.boxBoard[i][j]) {   
        return this.boxBoard[i][j];
      }
    }
  }

    if (j+1 < this.rows && this.boxBoard[i][j+1] === this.boxBoard[i][j]) {
      if (j+2 < this.rows && this.boxBoard[i][j+2] === this.boxBoard[i][j]) {   
        if (j+3 < this.rows && this.boxBoard[i][j+3] === this.boxBoard[i][j]) {   
          return this.boxBoard[i][j];  
        }
      }
    }

    //diagonal left ->  \
    if ( i-1 >= 0 && j-1 >=0 && this.boxBoard[i-1][j-1] === this.boxBoard[i][j]) {
      if (i-2 >= 0 && j-2 >=0  && this.boxBoard[i-2][j-2] === this.boxBoard[i][j]) {
        if (i-3 >= 0 && j-3 >=0  && this.boxBoard[i-3][j-3] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
        if ( i+1 < this.rows && j+1 <this.columns && this.boxBoard[i+1][j+1] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];
        }
      }
      if ( i+1 < this.rows && j+1 <this.columns && this.boxBoard[i+1][j+1] === this.boxBoard[i][j]) {
        if ( i+2 < this.rows && j+2 < this.columns && this.boxBoard[i+2][j+2] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }
  }

  if ( i+1 < this.rows && j+1 <this.columns && this.boxBoard[i+1][j+1] === this.boxBoard[i][j]) {
    if ( i+2 < this.rows && j+2 < this.columns && this.boxBoard[i+2][j+2] === this.boxBoard[i][j]) { 
      if ( i+3 < this.rows && j+3 < this.columns && this.boxBoard[i+3][j+3] === this.boxBoard[i][j]) {
          return this.boxBoard[i][j];  
        }
      }
    }

  //DIAGONAL RIGHT -> /
  if ( i-1 >= 0 && j+1 <this.columns && this.boxBoard[i-1][j+1] === this.boxBoard[i][j]) {
    if (i-2 >= 0 && j+2 <=this.columns && this.boxBoard[i-2][j+2] === this.boxBoard[i][j]) {
      if (i-3 >= 0 && j+3 >=0  && this.boxBoard[i-3][j+3] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
      if ( i+1 < this.rows && j-1 >=0 && this.boxBoard[i+1][j-1] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];
      }
    }
    if ( i+1 < this.rows && j-1 >=0 && this.boxBoard[i+1][j-1] === this.boxBoard[i][j]) {
      if ( i+2 < this.rows && j-2 >= 0 && this.boxBoard[i+2][j-2] === this.boxBoard[i][j]) {
      return this.boxBoard[i][j];
    }
  }
}

if ( i+1 < this.rows && j-1 >=0 && this.boxBoard[i+1][j-1] === this.boxBoard[i][j]) {
  if ( i+2 < this.rows && j-2 >= 0 && this.boxBoard[i+2][j-2] === this.boxBoard[i][j]) {
    if ( i+3 < this.rows && j-3 >= 0 && this.boxBoard[i+3][j-3] === this.boxBoard[i][j]) {
        return this.boxBoard[i][j];  
      }
    }
  }

  }



  calculateWinner5(i : number, j : number) {
      let count = 0;
      for(let a = 0 ; a < this.rows; a++){
        for(let b = 0 ; b < this.rows; b++){
            if(this.boxBoard[a][0] ===  this.boxBoard[i][j] && this.boxBoard[a][b] === this.boxBoard[a][0] ){
              count++;
            }
        }
        if(count == 5 ){
          return this.boxBoard[i][j];  
        }
        count = 0;
      }
      
      for(let b = 0 ; b < this.rows; b++){
        for(let a = 0 ; a < this.rows; a++){
          if(this.boxBoard[0][b] ===  this.boxBoard[i][j] && this.boxBoard[a][b] === this.boxBoard[0][b] ){
            count++;
          }
        }
        if(count == 5 ){
          return this.boxBoard[i][j];  
        }
        count = 0;
      }

      for(let a=0, b = 0 ; a<this.rows, b < this.rows; a++, b++){
        if(this.boxBoard[0][0] ===  this.boxBoard[i][j] && this.boxBoard[a][b] === this.boxBoard[0][0] ){
            count++;
          }
        if(count == 5 ){
          return this.boxBoard[i][j];  
        }
      } 
      count = 0;

    //   for(let a=this.rows-1, b = 0 ; a>0 && b < this.rows; a--, b++){
    //     if(this.boxBoard[this.rows-1][this.columns-1] ===  this.boxBoard[i][j] && this.boxBoard[a][b] === this.boxBoard[this.rows-1][this.columns-1] ){
    //         count++;
    //         console.log(count);
    //       }

    //     if(count == 5 ){
    //       return this.boxBoard[i][j];  
    //     }
    //   } 
    //   count = 0;

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





  drawCheck(){
    for (let j = 0; j < this.squares.length; j++) {
      if(!this.squares[j]){
        return false;
    }
  }
  return true;
}








}
