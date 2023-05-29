import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

//const logo = require('../assets/logo.svg').default as string;

export class ImagesComponent implements OnInit {
  @Input()
  src: string = "";

  constructor() { }
  ngOnInit() {

   }
}

