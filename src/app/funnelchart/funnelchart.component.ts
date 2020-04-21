import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-funnelchart',
  templateUrl: './funnelchart.component.html',
  styleUrls: ['./funnelchart.component.scss']
})
export class FunnelchartComponent implements OnInit {

  constructor() { }
  text="Gate Count"
  datalabels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  dataseries=[{
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]}]
  ngOnInit() { }
 highcharts=Highcharts;
 chartOptions = {  
  chart: {
    type: 'column'
},
title: {
    text: this.text
},
subtitle: {
    text: 'Number of visitors'
},
xAxis: {
    categories:this.datalabels,
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
    pointFormat: '<tr><td style="color:{series.color};padding:0"></td>'+
    '<td style="padding:0"><b>{point.y:.1f} students</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
            pointFormat: '{point.y:.0f}',
            enabled: true
        }
    }
},
series: this.dataseries
}
}
