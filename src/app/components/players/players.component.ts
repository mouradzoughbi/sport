import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  playersTab:any=[];
  p:any={};

  constructor() { }

  ngOnInit(): void {
   this.playersTab=[
      {name:"Sallah",position:"Atr",age:37},
       {name:"Messi",position:"GK",age:36},
       {name:"Ronaldo",position:"GK",age:37},
    ];
  }

}
