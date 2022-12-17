import { Injectable } from '@angular/core';
import { Observable,pipe,Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpUser:HttpClient) { }
  getAllUsers():Observable<any>{
    return this.httpUser.get('http://127.0.0.1:3000/api/user/');
  }
  createUsers(data:any):Observable<any>{
    return this.httpUser.post('http://127.0.0.1:3000/api/user/',data);
  }
  getOneUsers(id:any):Observable<any>{
    return this.httpUser.get(`http://127.0.0.1:3000/api/user${id}`);
  }
  Connect(data:any):Observable<any>{//Authentification
    return this.httpUser.post('http://127.0.0.1:3000/api/user/connect',data)
    .pipe(map(user=>{
  
      localStorage.setItem("currentUser",JSON.stringify(user));
      
  
      return user;
      }));
      
  }
}
