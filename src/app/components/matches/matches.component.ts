import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any=[];
  m: any={};

  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
   this.matchService.getAllMatches().subscribe(
    (data)=>{
      console.log("here into BE",data.matches);
      this.matches=data.matches;
      
    }
   );
  }
  updateMatches(T:any){
    this.matches=T;
  }

}
