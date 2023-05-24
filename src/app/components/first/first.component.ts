import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title = 'michael-first'
  constructor() {
    setTimeout(()=>this.title = 'changed after timeout', 5000);
  }
}
