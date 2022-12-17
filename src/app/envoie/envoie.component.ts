import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {

  model = 'option2';
  list=['any','any2']
  dest:boolean;
  trans:boolean;
  pays:boolean;
  devise:boolean;
  constructor() { }


  ngOnInit(): void {
  this.dest=true;
  this.trans=false;
  this.pays=false;
  this.devise=false;
  }
  destinataireForm = new FormGroup({
    'nom': new FormControl('', Validators.required),
    'prenom': new FormControl('', Validators.required),
    'date': new FormControl('', Validators.required),
    'lieu': new FormControl('', Validators.required),
    'adresse': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required)
  })
  transactionForm = new FormGroup({})
  paysForm = new FormGroup({})
  deviseForm = new FormGroup({})

  onSubmitDest(){}
  onSubmitTrans(){}
  onSubmitPays(){}
  onSubmitDevise(){}
}
