import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
// backend Adress
stadiumUrl:string="http://localhost:3000/stadia"
  
  constructor(private http:HttpClient) { }
  addStadium(obj:any){
  return this.http.post<{msg:string}>(this.stadiumUrl,obj);
  }
  getAllStadia(){
    return this.http.get(this.stadiumUrl);
  }
}



