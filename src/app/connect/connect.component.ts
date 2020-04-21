import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { ConnectionService } from './connectionservice'

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  private databaseSub: Subscription;
  databases = [];
  constructor(public connectionservice:ConnectionService) { }
  ngOnInit() {
     this.databases=this.connectionservice.connecteddatabases();
  }
  onConnect(form: NgForm){
    this.connectionservice.createdbconnection(form.value);
  }
  onviewfield(collectionname: string){
    console.log(collectionname);
    this.connectionservice.fieldlist(collectionname);
  }
}
