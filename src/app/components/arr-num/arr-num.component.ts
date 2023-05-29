import { Component, Input, OnInit} from '@angular/core';

const  myArrConst: number[] = [8, 2, 5, 1];

@Component({
  selector: 'app-arr-num',
  templateUrl: './arr-num.component.html',
  styleUrls: ['./arr-num.component.css'],
})
export class ArrNumComponent  implements OnInit{
  title = "Array manage";
  myArrSave: number[] = [];

  @Input()
  myArr: number[] = [8, 2, 5, 1];

  ngOnInit()
  {
    this.myArrSave = this.myArr;
  }

  AddNumberFunction(event: number) {
    this.myArr = this.myArrSave;
    var randNumber = Math.trunc(Math.random() * 10)
    this.myArr.push(randNumber);
    // console.log(event);
  }

  SortArrayFunction(ascend: boolean ) {
    this.myArr = [8, 2, 5, 1];
    if (ascend)
        this.myArr.sort((a,b)=>a - b);
    else
      this.myArr.sort((a,b)=>b - a);
  }
}
