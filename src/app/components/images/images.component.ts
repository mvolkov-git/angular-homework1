import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})

//const logo = require('../assets/logo.svg').default as string;
export class ImagesComponent implements OnInit {
  // private _images: Image[] = [];

  @Input()
  src: string = '';

  @Input()
  width: Number = 300;

  constructor() {
    setTimeout(() => (this.src = '../../../assets/Images/pexels-nilton-rodrigues-10294221.jpg'), 3000);
  }

  ngOnInit() {
    // alert(this.src);

    // this._images = [
    //   { title: 'Slide 1', url: '../photos/carousel/gg_slide 1.jpg' },
    //   { title: 'Slide 2', url: '../photos/carousel/gg_slide 2.jpg' },
    //   { title: 'Slide 3', url: '../photos/carousel/gg_slide 3.jpg' },
    //   { title: 'Slide 4', url: '../photos/carousel/gg_slide 4.jpg' },
    //   { title: 'Slide 5', url: '../photos/carousel/gg_slide 5.jpg' },
    // ];
  }
}
