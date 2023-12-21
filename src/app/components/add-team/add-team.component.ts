import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  addTeamForm!:FormGroup;

  constructor(private teamService:TeamService,
    private router:Router) { }

  ngOnInit(): void {
  }
  addTeam(){
    console.log("here add team",this.team);
    this.teamService.addTeam(this.team).subscribe( 
      (result)=>{
        console.log("here result from BE ",result.msg);
        this.team=result.msg;
        this.router.navigate([`/dashboard`]);
        
        
      });
  }

}


