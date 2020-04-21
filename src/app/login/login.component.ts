import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';

import {Router,ActivatedRoute} from '@angular/router';
interface DialogData {
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(
    public router:Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  /*isLoading = false;
  //user='';
  constructor(private route: ActivatedRoute,private router:Router) {}
  ngOnInit() {
    //this.route.paramMap.subscribe( paramMap => {
       //this.user=paramMap.get('Item');
  //});
  }*/
  onLogin(form: NgForm) {
  if (form.invalid) {
    return;
  }
  console.log(form.value.username);
  console.log(form.value.password);
  //if(form.value.password==this.user && form.value.password==this.user){
  if(form.value.password==form.value.username){
    this.router.navigate(['/create']);
  }
}
}
