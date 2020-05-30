import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  state = true;
  state2 = false;
  constructor() {
  }
  ngOnInit(): void {
  }
  link_fn() {
     this.state = true;
     this.state2 = false;
  }

  link_fn2() {
    this.state2 = !this.state2;
    this.state = false;
 }
}
