import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  title = 'michael-first';

  @Input()
  myArr: number[] = [8, 2, 5, 1];

  @Output()
  clicka = new EventEmitter<string>();

  onClick() {
    this.clicka.emit('gil');
  }

  alertFunction(event: string) {
    alert('Button clicked: ' + event);
    console.log(event);
  }

  AddNumberFunction(event: number) {
    this.myArr = [8, 2, 5, 1];
    var randNumber = Math.trunc(Math.random() * 10)
    this.myArr.push(randNumber);
    myArr.sort
    console.log(event);
  }
}
