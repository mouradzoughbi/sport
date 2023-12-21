import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
editPlayerForm!:FormGroup;
player:any={};
players:any=[];
id:any;
  constructor(private activatedRoute:ActivatedRoute,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe(
      (result)=>{
       this.player=result.player
      }
    );
  } 
    editPlayer(){
      this.playerService.editPlayer(this.player).subscribe(
        (res)=>{
          console.log(res.isUpdated);
          this.router.navigate([`/dashboard`])
          
        }
      )
       
       
  
    }
 

}
