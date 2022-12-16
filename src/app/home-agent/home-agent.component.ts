import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TransactionService } from 'app/service/transaction.service';

@Component({
  selector: 'app-home-agent',
  templateUrl: './home-agent.component.html',
  styleUrls: ['./home-agent.component.css']
})
export class HomeAgentComponent implements OnInit {
  readDataTransaction: any;
  Transaction: any;

  constructor(private routes: Router, private service:TransactionService) { }

  ngOnInit(): void {
    this.service.getAllTransaction().subscribe((res)=>{
      console.log(res,'res==>');
      this.readDataTransaction=res.data;
      this.Transaction=res.data[0].frais
      
    });
  }
  // userForm = new FormGroup({
  //   'login':new FormControl('',Validators.required),
  //    'password':new FormControl('',Validators.required),
  //  });
 
  //  userSubmit(){  
     
  //    this.service.Connect(this.userForm.value).subscribe((res)=>{
  //      console.log(res,'res==>');
  //      var id=res.data[0].idUser;
  //      if (res.data.length>0){}
  //      else{
  //      }
  //      window.location.href="http://localhost:4200/#/transaction";
  //    });
  //  }

}