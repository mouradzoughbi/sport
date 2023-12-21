import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadia:any=[];
  stadium:any={};
  id:any;


  constructor(private stadiumService:StadiumService,
    private router:Router) { }

  ngOnInit(): void {
    
  }


}
