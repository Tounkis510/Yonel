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
  n: number=2;
  id: any;

  constructor(private service: UserService ) { }

  ngOnInit(): void {
  }
  
  userForm = new FormGroup({
    'login':new FormControl('',Validators.required),
     'mdp':new FormControl('',Validators.required),
   });
 
   userSubmit(){  
     
     this.service.Connect(this.userForm.value).subscribe((res)=>{
       console.log(res,'res==>');
       console.log(this.userForm.value)
       this.id=res.data[0].id
       if(this.id==100){
        window.location.href="http://localhost:4200/#/admin";
       }else{
        window.location.href="http://localhost:4200/#/home-agent";
       }
     });
    }

  userForm = new FormGroup({
    'login':new FormControl('',Validators.required),
     'paseword':new FormControl('',Validators.required),
   });
 
   userSubmit(){  
     
    //  this.service.getOneUsers(this.userForm.value).subscribe((res)=>{
    //    console.log(res,'res==>');
    //    var id=res.data[0].idUser;
    //    if (res.data.length>0){
    //    this.showMsg=1;}
    //    else{
    //    this.showMsg=2}
    //    window.location.href="http://localhost:4200/home/"+id;
     };

}
