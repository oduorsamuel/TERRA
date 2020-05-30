import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Currencies: any[];
  StateDisplay: any[];
  selected: any;
  selectedState: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb' , 'Mar' , 'Apr', 'May' , 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [50000, 20000, 52000 , 37000, 40000 , 0, 0, 0, 0, 0, 0, 0] , label: '' }
  ];
  public ChartColors: any[] = [{ backgroundColor: ['#87ceeb', '#2E86C1 ', '#9370DB', '#8A2BE2', '#9932CC'] }];


  constructor() { }

  ngOnInit(): void {
  }

}
