import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Apptitude', 'Data Science', 'Problem Solving',
    'Data structure', 'Programming', 'General Knowledge', 'Literature'];

  public radarChartData: ChartDataSets[] = [
    { data: [100, 350, 260, 400, 300, 450, 360], label: 'Book Usage Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

}
