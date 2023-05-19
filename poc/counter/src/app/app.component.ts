import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count = 0;
  countIncreas(){
    this.count++
  }
  countDecreas(){
    this.count--
  }
  resetValue(){
    this.count=0
  }
}
