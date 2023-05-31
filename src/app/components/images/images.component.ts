import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})

//const logo = require('../assets/logo.svg').default as string;
export class ImagesComponent implements OnInit {
  isSlideshowRunning: boolean = false;
  assetsRoot: string = '../../../assets/Images/';
  num: number = 0;
  btnColor = 'black';

  imgSources: string[] = [
    this.assetsRoot + 'pexels-antony-trivet-14522299.jpg',
    // this.assetsRoot + "pexels-arthouse-studio-4573430.jpg",
    this.assetsRoot + 'pexels-arthouse-studio-4573165.jpg',
    this.assetsRoot + 'pexels-erik-mclean-7833008.jpg',
    this.assetsRoot + 'pexels-lan-yao-15402560.jpg',
    this.assetsRoot + 'pexels-nilton-rodrigues-10294221.jpg',
    this.assetsRoot + 'pexels-q-hưng-phạm-14799215.jpg',
  ];

  @Input()
  src: string = '../../../assets/Images/pexels-erik-mclean-7833008.jpg';

  @Input()
  width: Number = 200;

  @Input()
  btnStartStopText: string = 'Start slideshow';

  ngOnInit() {
    // for (let i = 0; i < this.imgNames.length; i++) {
    //   setTimeout(
    //     () => (this.src = '../../../assets/Images/' + this.imgNames[i]),
    //     1000
    //   );
    //}
    //   // console.log(this.src);
    // //  alert(this.src);
    // }
    //}
  }

  delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }

  async StartStopSlideshow() {
    this.isSlideshowRunning = !this.isSlideshowRunning;
    this.btnStartStopText =
      (this.isSlideshowRunning ? 'Stop' : 'Start') + ' slideshow';

      this.btnColor = this.isSlideshowRunning ? 'red' : 'black';

    while (this.isSlideshowRunning) {
      await this.delay(300);
      this.num++;
      if (this.num == this.imgSources.length) this.num = 0;
      await this.delay(2000);
    }
  }

  setSource(idx: number) {
    this.num = idx;
  }
}
