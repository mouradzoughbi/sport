import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams: any=[];
team: any={};
id:any;
  constructor(private router:Router,
    private teamService:TeamService) { }
    

  ngOnInit(): void {
   this.getAll();
  }
  goToDisplay(id:number){
    this.router.navigate([`teamInfo/${id}`]);
    
   }
   goToEdit(id: number){

    this.router.navigate([`editTeam/${id}`]);
   }
   delete(id:number){
    console.log(`here object number ${id} deleted`);
    this.teamService.deleteTeam(id).subscribe(
      (data)=>{
        console.log("here data after delete",data.msg);
        if (data.msg) {
          this.getAll();
          
        }
        
       
      }
    );
  }
    getAll(){
      this.teamService.getAllTeams().subscribe(
        (response)=>{
          console.log("here response from BE",response);
          this.teams=response.teams;
        }
      );
   }
  }

