import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 // backend Adress
 weatherUrl:string="http://localhost:3000/weather"
  constructor(private httpClient:HttpClient) { }
  searchWeather(city:any){
    return this.httpClient.post<{result:any}>(this.weatherUrl,city);
  }
}
