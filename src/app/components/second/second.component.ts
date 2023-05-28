import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input()
  title: string = "default title";

  @Input()
  anotherTitle = "another default";
}
