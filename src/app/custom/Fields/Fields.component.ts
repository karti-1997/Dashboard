import {Component, Inject, Injectable} from  '@angular/core';
import {NgForm} from '@angular/forms';
import {CustomComponent} from '../custom.component';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import {listData} from '../../datafile'

@Component({
templateUrl:  'Fields.component.html'
})
export  class  FieldsComponent {
    charttitle:string
    subtitle:string
    Xaxis:string
    Yaxis:string
    constructor(public custom:CustomComponent,private  dialogRef:  MatDialogRef<FieldsComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    
    }
    public  closeMe() {
        this.dialogRef.close()
    }
    ongenerate(form: NgForm) {
        if (form.invalid) {
          return;
        }
        else{
            console.log(this.data.charttype);
            this.custom.select(this.data.charttype,form.value.charttitle,form.value.subtitle,form.value.Xaxis,form.value.Yaxis);
            this.charttitle=form.value.charttitle;
            this.subtitle=form.value.subtitle;
            this.Xaxis=form.value.Xaxis;
            this.Yaxis=form.value.Yaxis;
        }
    }
}