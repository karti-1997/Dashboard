import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, RouterModule } from '@angular/router'
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: boolean;
  notuser: boolean;
  

  constructor(public dialog: MatDialog,public router:Router) {}
  ngOnInit() {
    this.notuser=true;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = true;
      this.notuser=false;
    });
  }
  /*constructor(private Router: Router) { }
  isuser=false;
  ngOnInit() {
  }
  //onlogined(Item: string) {
    //this.Router.navigate(['/Login/'+Item]);
  //}*/
  onlogined(user:string){
    console.log("I am "+user);
    this.router.navigate['/connect'];
  }
  onloggedout(){
    this.user=false;
    this.notuser=true;
  }
}
