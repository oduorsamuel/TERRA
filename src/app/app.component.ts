import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  state = true;
  state2 = false;
  link_fn() {
     this.state = true;
     this.state2 = false;
  }

  link_fn2() {
    this.state2 = !this.state2;
    this.state = false;
 }
}
