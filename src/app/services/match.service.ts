import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // backend Adress
  matchUrl:string="http://localhost:3000/matches"
  

  constructor( private httpClient:HttpClient) { }

  getAllMatches(){
    return this.httpClient.get<{ matches: any }>(this.matchUrl);
  }
  getMatchById(id:any){
    return this.httpClient.get<{ match: any }>(`${this.matchUrl}/${id}`);
  }
  addMatch(obj:any){
    return this.httpClient.post<{ msg: any }>(this.matchUrl,obj);
  }
  editMatch(obj:any){
    return this.httpClient.put<{ isUpdated: any }>(this.matchUrl,obj);
  
  }
  deleteMatch(id:any){
    return this.httpClient.delete<{ msg: any }>(`${this.matchUrl}/${id}`);
  }
}
