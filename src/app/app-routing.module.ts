import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';




const routes: Routes = [
  // http://localhost:4200: url de  base
{path:"",component:HomeComponent},
// http://localhost:4200: url de  base
{path:"login",component:LoginComponent},
{path:"subscription",component:SignupComponent},
{path:"signupAdmin",component:SignupComponent},
{path:"matches",component:MatchesComponent},
{path:"dashboard",component:AdminComponent},
{path:"addMatch",component:AddMatchComponent},
{path:"addTeam",component:AddTeamComponent},
{path:"addPlayer",component:AddPlayerComponent},
{path:"matchInfo/:id", component:MatchInfoComponent},
{path:"playerInfo/:id", component:PlayerInfoComponent},
{path:"teamInfo/:id", component:TeamInfoComponent},
{path:"editMatch/:id", component:EditMatchComponent},
{path:"editPlayer/:id", component:EditPlayerComponent},
{path:"editTeam/:id", component:EditTeamComponent},
 {path:"players", component:PlayersComponent},
 {path:"matchTable", component:MatchesTableComponent},
 {path:"teamTable", component:TeamsTableComponent},
 {path:"playerTable", component:PlayerTableComponent},
 {path:"searchWeather", component:WeatherComponent},
 {path:"addStadium", component:AddStadiumComponent},
 {path:"stadiumTable", component:StadiumTableComponent}

 
 
 







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
