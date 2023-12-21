import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string="http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }
  login(user:any){
    return this.httpClient.post<{ msg:string,token:string}>(this.userUrl+"/login",user);
  }
  signup(user:any,img:File){
    let formData=new FormData()
    formData.append("firstName",user.firstName);
    formData.append("lastName",user.lastName);
    formData.append("email",user.email);
    formData.append("pwd",user.pwd);
    formData.append("role",user.role);
    formData.append("img",img);
    return this.httpClient.post<{ msg:string }>(this.userUrl+"/signup",formData);
  }
  editProfile(user:any){
    return this.httpClient.put(this.userUrl,user);
  
  }

}
