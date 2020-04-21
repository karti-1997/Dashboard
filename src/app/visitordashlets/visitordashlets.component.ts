import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,BaseChartDirective, Color } from 'ng2-charts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-visitordashlets',
  templateUrl: './visitordashlets.component.html',
  styleUrls: ['./visitordashlets.component.scss']
})
export class VisitordashletsComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  highcharts=Highcharts;
  ChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
          label: function(tooltipItem) {
              return Number(tooltipItem.yLabel) + "students";
          }
      }
  },
  legend: { display: true, labels: { fontColor: 'black' }}
  };
  chartOptions1={
  chart: {
    type: 'column'
},
title: {
    text: 'Monthly Average Visitors'
},
xAxis: {
    categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'students'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
            enabled: true
        }
    }
},
series: [{
    name: 'students',
    data: [1450, 1370, 1600, 1700, 1460, 1330, 1450, 1370, 1600, 1700, 1460,1500]
}]
}

chartOptions2={
  chart: {
    type: 'column'
},
title: {
    text: 'Daily Average Visitors'
},
xAxis: {
    categories: [
      '8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'students'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
                    enabled: true
                }
    }
},
colors: [ '#ED561B'],
series: [{
    name: 'students',
    data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46]
    
}]
}
chartOptions3 =  {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Random Data'
    },
    subtitle: {
        text: 'Demo'
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: true
    },
    plotOptions: {
      column: {
          stacking: 'normal',
          pointPadding: 0.1,
          borderWidth: 0,
          dataLabels: {
              enabled: true
          }
      }
  },
    series: [{
        name: 'Polytechnic',
        data: [10, 10, 20, 19, 25,6 ,7, 19,43,36,7,44]
    }, {
        name: 'Engineering',
        data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27]
    }, {
        name: 'Computer Application',
        data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15]
    }, {
        name: 'Fashion Design',
        data: [28, 18, 20, 19,9, 16, 27, 20,21,45,34,56]
    }, {
        name: 'Mathematics',
        data: [20, 29, 10, 23,10, 26, 25, 30,25,46,53,21]
    }]
};
  /*public ChartLabels2: Label[] = ['JAN','FEB','MAR','APR','MAY','JUNE','JULY','AUG','SEP','OCT','NOV','DEC'];
  public ChartType2: ChartType = 'bar';
  
  public ChartPlugins2 = [];
  public ChartColors2: Color[] = [
    { backgroundColor: 'tomato' },
    { backgroundColor: 'yellow' },
    { backgroundColor: 'cadet blue' },
    { backgroundColor: 'grey' },
    { backgroundColor: 'orange' }
  ];
    public ChartData2: ChartDataSets[] = [
      { data: [20, 29, 10, 23,10, 26, 25, 30,25,46,53,21], label: 'Mathematics', stack: 'a' },
      { data: [28, 18, 20, 19,9, 16, 27, 20,21,45,34,56], label: 'FashionDesign', stack: 'a' },
      { data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15], label: 'Computer Application', stack: 'a' },
      { data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27], label: 'Engineering', stack: 'a' },
      { data: [10, 10, 20, 19, 25,6 ,7, 19,43,36,7,44], label: 'Polytechnic', stack: 'a' }

    ];
  }*/
}

