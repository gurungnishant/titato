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

}
