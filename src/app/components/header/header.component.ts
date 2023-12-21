import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  isLoggedIn(){
    const jwt = sessionStorage.getItem("token");
    if (jwt){
      this.user=this.decodeToken(jwt);

       
      
    }
    return !!jwt;
    }
    decodeToken(token: string) {
      return jwt_decode(token);
      }
      logout(){
        sessionStorage.removeItem("token");
        this.router.navigate([""]);
      }
}
