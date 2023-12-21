import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup;
  user:any={};
  errorMsg:any;
  constructor( private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log("here add login",this.user);
    this.userService.login(this.user).subscribe(
     
      
      (data)=>{
        console.log("here msg after login",data.msg);
        // console.log("welcome",data.msg,data.token);
        if (data.token) {
          // save token into session storage
          sessionStorage.setItem("token",data.token);
          let user:any=this.decodeToken(data.token);
          if (user.role=="admin") {
            this.router.navigate(["dashboard"])
            
          } else {
            this.router.navigate([""]);
            
          }
        } else {
        this.errorMsg="please check Email/Pwd";
          
        }
      }
      
    );

}
decodeToken(token: string) {
  return jwt_decode(token);
  }
}
