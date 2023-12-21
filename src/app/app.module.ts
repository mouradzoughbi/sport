import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';

import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';

import { PlayersComponent } from './components/players/players.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AstrixPipe } from './pipes/astrix.pipe';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent,
    AdminComponent,
    MatchesComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    LoginComponent,
    SignupComponent,
    ArticlesComponent,
    MatchesTableComponent,
   
    TeamsTableComponent,
    MatchInfoComponent,
    
    PlayersComponent,
    EditMatchComponent,
    ReversePipe,
    AstrixPipe,
    PlayerComponent,
    PlayerTableComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    EditPlayerComponent,
    EditTeamComponent,
    WeatherComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
