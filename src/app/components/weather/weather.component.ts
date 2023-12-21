import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchForm!:FormGroup;
  weatherResult:any;
  constructor( private formBuilder:FormBuilder,
    private weatherService:WeatherService) { }


  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      city:["",Validators.required],
    });
  }
  search(){
    this.weatherService.searchWeather(this.searchForm.value).subscribe(
      (data)=>{
        console.log("here data from API",data.result);
       
        this.weatherResult=data.result;
      }
    );
      

  }
}
