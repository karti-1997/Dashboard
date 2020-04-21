import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent   {
  Highcharts = Highcharts;
  constructor() { }
  sbarchart: boolean
  sbartitle:string;
  sbarsubtitle='';
  sbarxaxis='';
  sbaryaxis='';
  scolumnchart: boolean
  barchart: boolean
  columnchart: boolean
  linechart: boolean
  dualchart: boolean
  areachart: boolean
  piechart: boolean
  donutchart: boolean
  polarchart: boolean
  bubblechart: boolean
  select1(chart:string){
    if(chart=="Sbar"){
        console.log("Iam");
        this.sbarchart=true;
    }
    if(chart=="Scolumn"){
        console.log("Iam");
        this.scolumnchart=true;
    }
  }
  select(chart: string,title: string, subtitle:string,xaxis:string,yaxis:string){
      if(chart=="Sbar"){
        console.log("I am in chart creation");
        this.sbartitle=title;
        console.log(this.sbartitle);
        this.sbarsubtitle=subtitle;
        this.sbarxaxis=xaxis;
        this.sbaryaxis=yaxis;
        }
      else if(chart=="Scolumn"){
        this.scolumnchart=true;
        //this.sbarchart=false;
        //this.barchart=false;
        //this.columnchart=false;
      }
      else if(chart=='bar'){
        //this.scolumnchart=false;
        //this.sbarchart=false;
        this.barchart=true;
        //this.columnchart=false;
      }
      else if(chart=='column'){
        //this.scolumnchart=false;
        //this.sbarchart=false;
        //this.barchart=false;
        this.columnchart=true;
      }
      else if(chart=='line'){
          this.linechart=true;
      }
      else if(chart=='dual'){
        this.dualchart=true;
    }
    else if(chart=='area'){
        this.areachart=true;
    }
    else if(chart=='pie'){
        this.piechart=true;
    }
    else if(chart=='donut'){
        this.donutchart=true;
    }
    else if(chart=='polar'){
        this.polarchart=true;
    }
    else if(chart=='bubble'){
        this.bubblechart=true;
    }
  }
  chartOptionsSbar={
    chart: {
      type: 'column'
  },
  title: {
      text: this.sbarsubtitle
  },
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total fruit consumption'
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
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
  }]
};
chartOptionsScolumn={
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Book issue according to User Category'
    },
    xAxis: {
        categories: ['Department1', 'Department2', 'Department3', 'Department4', 'Department5']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Book consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Student',
        data: [35, 63, 54, 37, 82]
    }, {
        name: 'Faculty',
        data: [12, 8, 5, 2, 1]
    }, {
        name: 'Associative user',
        data: [3, 4, 4, 2, 5]
    }]
    };
chartOptionsbar={
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
    };
    chartOptionscolumn={
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
        }]
    };
    chartOptionsline={
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    }   
    chartOptionsdual={ 
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }
    chartOptionsarea={ 
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Distribution by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            split: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                },
                accessibility: {
                    pointDescriptionFormatter: function (point) {
                        function round(x) {
                            return Math.round(x * 100) / 100;
                        }
                        return (point.index + 1) + ', ' + point.category + ', ' +
                            point.y + ' millions, ' + round(point.percentage) + '%, ' +
                            point.series.name;
                    }
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    }
    chartOptionspie={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: 'Chrome', y: 61.41 },
                { name: 'Internet Explorer', y: 11.84 },
                { name: 'Firefox', y: 10.85 },
                { name: 'Edge', y: 4.67 },
                { name: 'Safari', y: 4.18 },
                { name: 'Other', y: 7.05 }
            ]
        }]
    }
    chartOptionsdonut={
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Contents of Highsoft\'s weekly fruit delivery'
        },
        subtitle: {
            text: '3D donut in Highcharts'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [
                ['Bananas', 8],
                ['Kiwi', 3],
                ['Mixed nuts', 1],
                ['Oranges', 6],
                ['Apples', 8],
                ['Pears', 4],
                ['Clementines', 4],
                ['Reddish (bag)', 1],
                ['Grapes (bunch)', 1]
            ]
        }]
    }
    chartOptionspolar={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2017',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', 58.9],
                ['Firefox', 13.29],
                ['Internet Explorer', 13],
                ['Edge', 3.78],
                ['Safari', 3.42],
                {
                    name: 'Other',
                    y: 7.61,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    }
    chartOptionsbubble={
        
    }

}
