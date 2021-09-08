import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidator } from '../username.validator';
import { DataService } from '../data.service';
  


@Component({
  selector: 'app-playmenu',
  templateUrl: './playmenu.component.html',
  styleUrls: ['./playmenu.component.scss']
})
export class PlaymenuComponent implements OnInit {


 //message: string = '';
 users = {
  player1name: 'player1', player1symbol: 'A',
  player2name: 'player2', player2symbol: 'B' ,
  player3name: 'player3', player3symbol: 'C' ,
  player4name: 'player4', player4symbol: 'D',
  selectedmode: 'ffa', selected : '3'
};
  constructor(public dialogRef: MatDialogRef<PlaymenuComponent>, private data: DataService ) { }

 

  selected : string = '';
  selectedmode : string = 'ffa';





  // selectChangehandler(event : any){
  //   this.selected = event.target.value;
  //   this.selectednum = +this.selected;
  // } 

  // selectChangehandlermode(event : any){
  //   this.selectedmode = event.target.value;
  // } 

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.users = users)
  }

 
newMessage(){
  this.data.changeMessage(this.users);
}

onSubmit() {
  console.log('player3name: ', this.users.player3name);
  this.newMessage();
  this.dialogRef.close();
  
}





form = new FormGroup({
  username: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
});
 
get f(){
  return this.form.controls;
}



}
