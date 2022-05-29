import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['firstimage.jpg', 'secondimage.jpg', 'thirdimage.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 4000);
  }
}