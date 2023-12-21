import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
editTeamForm!:FormGroup;
team:any={};
teams:any=[];
id:any;
errorMsg: string = "";
  constructor( private activatedRoute:ActivatedRoute,
    private teamService:TeamService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe(
      (data)=>{
        console.log("here data from BE",data);
        this.team=data.team
      }
    );
      
  }
  editTeam(){
    this.teamService.editTeam(this.team).subscribe(
      (response)=>{
        if (response.isUpdated) {
          this.router.navigate(["/dashboard"]);
        } else {
          this.errorMsg = "Error in Editing"
        }


      }
    );

     
     

  }

}
     

