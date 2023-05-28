import { Component } from '@angular/core';

@Component({
  selector: 'app-arr-num',
  templateUrl: './arr-num.component.html',
  styleUrls: ['./arr-num.component.css'],
})
export class ArrNumComponent {
  title = "Arr-Num";
  myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
}
