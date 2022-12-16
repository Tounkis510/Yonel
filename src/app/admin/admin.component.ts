import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AgenceService } from 'app/service/agence.service';
import { UserService } from 'app/service/user.service';
import { ClientService } from 'app/service/client.service';
import { SousagenceService } from 'app/service/sousagence.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  readDataClient: any;
  readDataUsers: any;
  readDataAgence: any;
  test: any;

  constructor(private service1: AgenceService, private service2: UserService, private service3: ClientService, private service4: SousagenceService) { }

  ngOnInit(): void {
    this.service1.getAllAgence().subscribe((res)=>{
      console.log(res,'res==>');
      this.readDataAgence=res.data;
    });
    this.service2.getAllUsers().subscribe((res)=>{
      console.log(res,'res==>');
      this.readDataUsers=res.data;
    });
    this.service3.getAllClient().subscribe((res)=>{
      console.log(res,'res==>');
      this.readDataClient=res.data;
    });
  }
  userForm1 = new FormGroup({
    'code_agence':new FormControl('',Validators.required),
    'nom_agence':new FormControl('',Validators.required),
    'statut_agence':new FormControl('',Validators.required),
    'login':new FormControl('',Validators.required),
  });
  userForm2 = new FormGroup({
    'login':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    'key':new FormControl('',Validators.required),
    'sousAgenceId':new FormControl('',Validators.required),
  });
  userForm3 = new FormGroup({
    'nom_client':new FormControl('',Validators.required),
    'prenom_client':new FormControl('',Validators.required),
    'date_naiss_client':new FormControl('',Validators.required),
    'lieu_naiss_client':new FormControl('',Validators.required),
    'email_client':new FormControl('',Validators.required),
    'role':new FormControl('',Validators.required),
    'phone_client':new FormControl('',Validators.required),
  });
  userForm4 = new FormGroup({
    'code_sous_agence':new FormControl('',Validators.required),
    'nom_sous_agence':new FormControl('',Validators.required),
    'adresse_sous_agence':new FormControl('',Validators.required),
    'city_sous_agence':new FormControl('',Validators.required),
    'country_sous_agence':new FormControl('',Validators.required),
    'phone_sous_agence':new FormControl('',Validators.required),
    'email_sous_agence':new FormControl('',Validators.required),
    'agenceId':new FormControl('',Validators.required),
  });
  userSubmit1(){
    console.log(this.userForm1.value);
    this.service1.CreateAgence(this.userForm1.value).subscribe((res)=>{
      console.log(res,'res==>');
    });
  }
  userSubmit2(){
    console.log(this.userForm2.value);
    this.service2.createUsers(this.userForm2.value).subscribe((res)=>{
      console.log(res,'res==>');
    });
  }
  userSubmit3(){
    console.log(this.userForm3.value);
    this.service3.createUsers(this.userForm3.value).subscribe((res)=>{
      console.log(res,'res==>');
    });
  }
  userSubmit4(){
    console.log(this.userForm4.value);
    this.service4.createUsers(this.userForm4.value).subscribe((res)=>{
      console.log(res,'res==>');
    });
  }
}
