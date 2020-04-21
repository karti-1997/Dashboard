import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ChartService } from '../Sharedservices/chartservice';
import { element } from 'protractor';

@Component({
  selector: 'app-book-total',
  templateUrl: './book-total.component.html',
  styleUrls: ['./book-total.component.scss']
})
export class BookTotalComponent implements OnInit {

  constructor(public chartservice: ChartService) { }
  data=this.chartservice.createbooktotaldata();
  label=this.chartservice.createbooktotallabel();
 ngOnInit() {
  }

  doughnutChartColors: Color[]=[
    {
      backgroundColor: [
        'rgba(110, 114, 20, 1)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)'
    ]
    }
  ];
  doughnutChartData: ChartDataSets[] = [
    //{ data: this.chartservice.createbooktotaldata()}
    {data: this.data}
  ];
  doughnutChartLabels: Label[] = this.label;
  doughnutChartOptions = {
    responsive: true,
  };
  doughnutChartLegend = true;
  doughnutChartPlugins = [];
  doughnutChartType = 'doughnut';
}
