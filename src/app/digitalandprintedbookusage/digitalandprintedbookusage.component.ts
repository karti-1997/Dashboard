import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as Highcharts from 'highcharts';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-digitalandprintedbookusage',
  templateUrl: './digitalandprintedbookusage.component.html',
  styleUrls: ['./digitalandprintedbookusage.component.scss']
})
export class DigitalandprintedbookusageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  highcharts=Highcharts;
  
  chartOptions={
    chart: {
      type: 'spline'
  },
  title: {
      text: 'Monthly Average usage of Ebooks and Printed books'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
      title: {
          text: 'Number of books taken/download'
      }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
      spline: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
      name: 'Printedbooks',
      data: [700, 609, 950, 450, 600, 815, 452, 365, 233, 483, 289, 396]
  }, {
      name: 'E-Books',
      data: [319, 442, 537, 805, 419, 502, 170, 366, 142, 203, 166, 248]
  }]
  }
}

