import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-gatecount',
  templateUrl: './gatecount.component.html',
  styleUrls: ['./gatecount.component.css']
})

export class GatecountComponent {

  ChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
          label: function(tooltipItem) {
              return Number(tooltipItem.yLabel) + "students";
          }
      }
  }
  };
  ChartLabels: Label[] = ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];
  ChartLegend:true;
  ChartType: ChartType = 'bar';
  ChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46], 
      label: 'Gate Count',
      borderWidth: 1}
  ];
  gateCountToday(){
    ChartLabels: this.ChartLabels = ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];
    ChartLegend:true;
    ChartType: this.ChartType = 'bar';
    ChartData: this.ChartData = [
      { data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46], label: 'Gate Count'}
    ];
  }
  gateCountMonth(){
    ChartOptions: this.ChartOptions = {
      responsive: true,
    };
    ChartLabels: this.ChartLabels = ['1-JAN','2-JAN','3-JAN','4-JAN','5-JAN','6-JAN','7-JAN','8-JAN','9-JAN','10-JAN','11-JAN','12-JAN','13-JAN','14-JAN','15-JAN',
    '16-JAN','17-JAN','18-JAN','19-JAN','20-JAN','21-JAN','22-JAN','23-JAN','24-JAN','25-JAN','26-JAN','27-JAN','28-JAN','29-JAN','30-JAN','31-JAN'];
    ChartLegend:true;
    ChartType: this.ChartType = 'bar';
    ChartData: this.ChartData = [
      { data: [450, 370, 600, 700, 460, 330, 450, 370, 600, 700, 450, 600, 500, 340, 440, 
        531, 234, 345, 543, 123, 222, 230, 333, 320, 342, 340, 320,400, 460, 540], label: 'Gate Count' }
    ];
  }

  gateCountYear(){
    ChartOptions: this.ChartOptions = {
      responsive: true,
      scales: { 
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'Frequency Rate'
         }
      }]
   }
    };
    ChartLabels: this.ChartLabels = ['JAN','FEB','MAR','APR','MAY','JUNE','JULY','AUG','SEP','OCT','NOV','DEC'];
    ChartLegend:true;
    ChartType: this.ChartType = 'bar';
    ChartData: this.ChartData = [
      { data: [1450, 1370, 1600, 1700, 1460, 1330, 1450, 1370, 1600, 1700, 1460,1500], label: 'Gate Count' }
    ];
  }
  classApplied = false;
  zoomIn() {
    this.classApplied = !this.classApplied;
  }
}           