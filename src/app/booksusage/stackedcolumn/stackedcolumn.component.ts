import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-stackedcolumn',
  templateUrl: './stackedcolumn.component.html',
  styleUrls: ['./stackedcolumn.component.scss']
})
export class StackedcolumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts=Highcharts;
  chartOptions={
  chart: {
    type: 'column'
},
title: {
    text: 'Used and Unused books Comparison'
},
xAxis: {
  
    categories: ['Literature','DataScience','ArtificialIntelligence','Engineering','Mathematics','Computer Applications']
},
yAxis: {
    min: 0,
    title: {
        text: 'Number of Books'
    },
    stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || 'gray'
        }
    }
},
legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
},
tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: true
        }
    }
},
series: [{
    name: 'Used books',
    data: [350,400,300,500,700,640]
}, {
    name: 'Unused books',
    data: [80, 98, 75, 62, 91,20]
}]
}
}
