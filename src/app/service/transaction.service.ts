import { Injectable } from '@angular/core';
import { Observable,pipe,Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(public httpUser:HttpClient) { }
  getAllUsers():Observable<any>{
    return this.httpUser.get('http://127.0.0.1:3000/api/user/');
  }
}
