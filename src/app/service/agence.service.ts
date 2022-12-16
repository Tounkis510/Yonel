import { Injectable } from '@angular/core';
import { Observable,pipe,Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(public httpUser:HttpClient) { }
  getAllAgence():Observable<any>{
    return this.httpUser.get('http://127.0.0.1:3000/api/agence');
  }
  CreateAgence(data:any):Observable<any>{
    return this.httpUser.post('http://127.0.0.1:3000/api/agence',data);
  }
}
