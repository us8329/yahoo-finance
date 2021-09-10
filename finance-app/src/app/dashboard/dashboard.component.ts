import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'ngFinance';
  timeframes = [
        {id:0, timeframe: 0, label:'1 Day', selected: false},
        {id:1, timeframe: 4, label:'1 Week', selected: false},
        {id:2, timeframe: 20, label:'1 Month', selected: false},
        {id:3, timeframe: 62, label:'3 Months', selected: false},
        {id:4, timeframe: 125, label:'6 Months', selected: false},
        {id:5, timeframe: 251, label:'1 Year', selected: false},
        {id:6, timeframe: 1288, label:'5 Years', selected: false},
        {id:7, timeframe: undefined, label:'Max', selected: false}
      ];
  
  date$ = [];
  lineData$ = [];
  barData$ = [];
  lineCount: number;

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        id: 'left-y-axis',
          type: 'linear',
          position: 'left'
        }, {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right'
        }]
      }
  };
  public chartLabels = this.date$;
  public chartLegend = true;
  public chartData = [{data: this.lineData$, label: 'Price', yAxisID: 'right-y-axis', type: 'line'},
                      {data: this.barData$, label: 'Volume', yAxisID: 'left-y-axis'}];
  
  onKeyup(key: any){
    console.log(key);
  }
  onChange(event: any){
    console.log(event);
  }
  onTimeChange(timeframe: number){
    console.log(timeframe);
  }

  toSearch(){
    document.getElementById("searchStock")?.scrollIntoView({behavior:'smooth'})
  }
}
