import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My home work1';
  isButtonDisabled = true;

  intArr: number[] = [];

  constructor() {
    setTimeout(() => (this.isButtonDisabled = false), 5000);
  }

  click() {this.title = 'changed in class'}

alertFunction(event: string) {
  alert("Button clicked");
  console.log(event);
}

  private mich() {}
}
