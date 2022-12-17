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
<<<<<<< HEAD
  // userForm = new FormGroup({
  //   'login':new FormControl('',Validators.required),
  //    'password':new FormControl('',Validators.required),
  //  });
=======
  
  userForm = new FormGroup({
    'login':new FormControl('',Validators.required),
     'mdp':new FormControl('',Validators.required),
   });
>>>>>>> 9fa34589fa4948d8ea33aa958c9d8aa60349b3a0
 
  //  userSubmit(){  
     
<<<<<<< HEAD
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
=======
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
>>>>>>> 9fa34589fa4948d8ea33aa958c9d8aa60349b3a0

 

}
