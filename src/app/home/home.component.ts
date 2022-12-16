import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readDataUser: any;
  User: any;
  showMsg: number;
  mdp:any='tks';
  login:any='BT';
  n: boolean=true;
  id: any;

  constructor(private service: UserService ) { }

  ngOnInit(): void {
    
  }
  clickMethod() {
    if(confirm("Champs vide, Veuillez saisir un login et un mot de passe")) {
      console.log("Implement delete functionality here");
    }
  }
  
  userForm = new FormGroup({
    'login':new FormControl('',Validators.required),
     'mdp':new FormControl('',Validators.required),
   });
 
   userSubmit(){  
    if((!this.userForm.value.login || !this.userForm.value.mdp) || (!this.userForm.value.login && !this.userForm.value.mdp) ){
    this.clickMethod();}
    else{
     this.service.Connect(this.userForm.value).subscribe((res)=>{
       console.log(res,'res==>');
       console.log(this.userForm.value)
       this.id=res.data[0].id
       if(this.id==100){
        window.location.href="http://localhost:4200/#/admin";
       }else{
        window.location.href="http://localhost:4200/#/home-agent";
       }
      //  this.clickMethod('name')
     });
    }
  }

  

}
