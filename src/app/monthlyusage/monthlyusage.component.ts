import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-returnandissue',
  templateUrl: './monthlyusage.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class ReturnandissueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts = Highcharts;
   chartOptions = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Average Usage by each Department"
      },
      //subtitle: {
        // text: "Source: WorldClimate.com"
      //},
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Visitors"
         } 
      },
      //tooltip: {
        // valueSuffix:" °C"
      //},
      plotOptions: {
         spline: {
             dataLabels: {
                 enabled: true
             }
         }
     },
      series: [
         {
            name: 'Mathematics',
            data: [70, 69, 95, 145, 182, 215, 252,265, 233, 183, 139, 96]
         },
         {
            name: 'ComputerApplications',
            data: [20, 80, 57, 113, 170, 220, 248,241, 201, 141, 86, 25]
         },
         {
            name: 'Engineering',
            data: [90, 60, 35, 84, 135, 170, 186, 179, 143, 90, 39, 10]
         },
         {
            name: 'FashionDesign',
            data: [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48]
         },
         {
          name: 'Polytechnic',
          data: [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48]
       }
      ]
   };
}

