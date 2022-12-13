import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-agent',
  templateUrl: './home-agent.component.html',
  styleUrls: ['./home-agent.component.css']
})
export class HomeAgentComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

}