import { Component, OnInit, Inject } from '@angular/core';
import { CustomComponent } from '../custom.component';
import { MatDialog, MatDialogRef } from  '@angular/material';
import {FieldsComponent} from '../Fields/Fields.component';

export interface DialogData {
  charttype: string;
  charttitle: string;
}

@Component({
  selector: 'app-charttypenavbar',
  templateUrl: './charttypenavbar.component.html',
  styleUrls: ['./charttypenavbar.component.scss']
})

export class CharttypenavbarComponent implements OnInit {

  charttype: string;
  charttitle: string;
  constructor(public Custom: CustomComponent,private  dialog:  MatDialog) { }

  ngOnInit() {
  }
  select(chart:string){
    this.charttype=chart;
    this.Custom.select1(chart);
    console.log(chart);
  }
  generate(chart:string){  
    const dialogRef=this.dialog.open(FieldsComponent,{ 
              data: {charttype: chart, charttitle: this.charttitle}
            });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.Custom.select1(chart);
          });
  }
}