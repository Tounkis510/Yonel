import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PaiementService } from 'app/service/paiement.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  constructor(private service:PaiementService) { }

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    'date_paiement':new FormControl('',Validators.required),
    'numero_piece':new FormControl('',Validators.required),
    'nom_recepteur':new FormControl('',Validators.required),
   });
   userSubmit(){  
     
     this.service.createPaiement(this.userForm.value).subscribe((res)=>{
       console.log(res,'res==>');
       console.log(this.userForm.value);
    });
  }
}
