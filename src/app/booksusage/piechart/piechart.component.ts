import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts=Highcharts;
  chartOptions={
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Count of Total Books in Each Category'
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45,
          dataLabels: {
                    enabled: true
                }
        },
  },
  series: [{
      name: 'Book count',
      data: [
          ['Literature', 150],
          ['DataScience', 200],
          ['ArtificialIntelligence', 100],
          ['Engineering', 500],
          ['Mathematics', 200],
          ['Computer Applications',300]
      ]
  }]
}
}
