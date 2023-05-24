import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My home work1';
  isButtonDisabled = false;

  intArr: number[] = [];

  constructor() {
    setTimeout(() => (this.isButtonDisabled = true), 5000);
  }

  click() {this.title = 'changed in class'}

  private mich() {}
}
