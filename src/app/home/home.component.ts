import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
