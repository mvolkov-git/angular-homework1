import { Component, Input, OnInit} from '@angular/core';

const  myArrConst: number[] = [10, 20, 30];

@Component({
  selector: 'app-arr-num',
  templateUrl: './arr-num.component.html',
  styleUrls: ['./arr-num.component.css'],
})
export class ArrNumComponent  implements OnInit{
  title = "Array manage";
  myArrSaved: number[] = [];

  @Input()
  myArr: number[] = [];

  ngOnInit()
  {
    this.myArr = Object.assign([], myArrConst);
    this.myArrSaved = Object.assign([], this.myArr);
  }

  AddNumberFunction(event: number) {
   this.myArr = Object.assign([], this.myArrSaved);
    var randNumber = Math.trunc(Math.random() * 100)
    this.myArr.push(randNumber);
    this.myArrSaved = Object.assign([], this.myArr);
    // console.log(event);
  }

  SortArrayFunction(ascend: boolean ) {
   this.myArr = Object.assign([], this.myArrSaved);
    if (ascend)
        this.myArr.sort((a,b)=>a - b);
    else
       this.myArr.sort((a,b)=>b - a);
  }

  SortDefaultArrayFunction(){
    this.myArr = Object.assign([], this.myArrSaved);
   // this.myArr.sort();
  }

}
