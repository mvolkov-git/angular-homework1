import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  title = 'michael-first';

  @Input()
  myArr: number[] = [];

  @Output()
  clicka = new EventEmitter<string>();

  onClick() {
    this.clicka.emit('gil');
  }

  alertFunction(event: string) {
    alert('Button clicked: ' + event);
    console.log(event);
  }

}
