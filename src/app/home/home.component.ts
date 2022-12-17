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
  mdp:any='tks'
  login:any='BT'

  constructor(private service: UserService ) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res)=>{
      console.log(res,'res==>');
      this.readDataUser=res.data;
      
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
  //      if (res.data.length>0){
  //      this.showMsg=1;}
  //      else{
  //      this.showMsg=2}
  //      window.location.href="http://localhost:4200/#/home-agent";
  //    });
  //   }

 

}
