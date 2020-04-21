import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions =  {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Daily book issue'
      },
      subtitle: {
          text: 'Main Library'
      },
      xAxis: {
        categories: ['8-10', '10-12', '1-2', '2-4', '4-6']
      },
      yAxis: {
        title: {
            text: 'Number of books issued'
        },
        categories: ['0','1000', '2000', '3000', '4000', '5000']
      },
      tooltip: {
          split: true,
          valueSuffix: ' books'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [{
          name: 'Programming',
          data: [502, 809, 1402, 3634, 5268]
      }, {
          name: 'Apptitude',
          data: [106, 111, 133, 767, 1766]
      }, {
          name: 'Data Science',
          data: [163,  276, 408,  729, 628]
      }, {
          name: 'Database Management',
          data: [18, 31, 156, 818, 1201]
      }, {
          name: 'Literature',
          data: [2, 6, 13, 30, 46]
      }]
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
