import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={};
  addPlayerForm!:FormGroup;
  teamsTab:any=[];
  teamId:any;
  constructor(private playerService:PlayerService,
    private router:Router,
    private teamService:TeamService) { }

  ngOnInit(): void {
  this.teamService.getAllTeams().subscribe(
    (data)=>{
      this.teamsTab = data.teams;
    }
  )
  }
  addPlayer(){
    console.log("here add player",this.player);
    this.player.idTeam=this.teamId
    this.playerService.addPlayer(this.player).subscribe( 
      (result)=>{
        console.log(result.msg);
        this.player=result.msg;
        this.router.navigate([`/dashboard`])
        
      });
    

}
selectTeam(event:any){
  console.log(" Here event",event.target.value);
  this.teamId=event.target.value;
  

}
}
