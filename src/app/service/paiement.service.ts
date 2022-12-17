import { Injectable } from '@angular/core';
import { Observable,pipe,Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(public httpUser:HttpClient) { }
  getAllPaiement():Observable<any>{
    return this.httpUser.get('http://127.0.0.1:3000/api/paiement/');
  }
  createPaiement(data:any):Observable<any>{
    return this.httpUser.post('http://127.0.0.1:3000/api/paiement/',data);
  }
  getOnePaiement(id:any):Observable<any>{
    return this.httpUser.get(`http://127.0.0.1:3000/api/paiement${id}`);
  }
}
