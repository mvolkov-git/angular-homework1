import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My home work1';
  isButtonDisabled = true;
  isButtonDisabled1 = true;

  gilsArray = [5, 6, 7, 8, 9];

  constructor() {
    setTimeout(() => (this.isButtonDisabled = false), 3000);
  }

  click() {
    this.title = 'changed in class';
  }

  alertFunction(event: string) {
    alert('Button clicked: ' + event);
    console.log(event);
  }

  myFunc() {
    alert("boom " + Math.random());
  }
}
