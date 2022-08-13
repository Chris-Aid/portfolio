import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  yOfMouse: number;
  loaded = true;
  loaded2 = false;
  loaded3 = false;
  loaded4 = false;

  randomNumbers1 = [];
  randomNumbers2 = [];
  randomNumbers3 = [];

  constructor() { }

  ngOnInit(): void {
    this.pushRandomNumber();
    this.animateIntro();
  }

  animateIntro() {
    let introDiv = document.getElementById('introDiv');
    let introDiv2 = document.getElementById('introDiv2');
    let introDiv3 = document.getElementById('introDiv3');
    let buttonHider4 = document.getElementById('buttonHider4');

    this.loaded = true;
    setTimeout(() => {
      introDiv.style.display = 'none';
      this.loaded2 = true;
    }, 1000);
    setTimeout(() => {
      introDiv2.style.display = 'none';
      this.loaded3 = true;
    }, 2500);

    setTimeout(() => {
      this.loaded4 = true;
    }, 3500);

    setTimeout(() => {
      introDiv3.style.display = 'none';
      buttonHider4.style.display = 'none';

    }, 4500);

  }

  // detectMouse() {
  //   onmousemove = function(e){
  //     this.yOfMouse = e.clientY
  //   }
  // }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(e) {
  //   this.yOfMouse = window.scrollY;
  //   // console.log(window.scrollY)
  //   // let star = document.getElementById('star');
  //   // star.style.bottom = this.yOfMouse + 'px';
  // }

  // @HostListener('wheel', ['$event']) // for window scroll events
  // onWheel(e) {

  //   console.log(e.offsetY)
  //   // console.log(e.clientY)
  //   e.preventDefault();
  //   e.stopPropagation();

  //   }

  pushRandomNumber() {
    for (let i = 0; i < 50; i++) {
      let posX = 95 * Math.random()
      this.randomNumbers1.push(posX);
    }

    for (let i = 0; i < 50; i++) {
      let posX = 95 * Math.random()
      this.randomNumbers2.push(posX);
    }

    for (let i = 0; i < 50; i++) {
      let posX = 95 * Math.random()
      this.randomNumbers3.push(posX);
    }
  }

  randomNumber(i: number, star: number) {
    let maxDelay = 3 * Math.random();
    if (star == 1) {
      return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers1[i] + 'vw' };
    } else if (star == 2) {
      return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers2[i] + 'vw' };
    } else {
      return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers3[i] + 'vw' };
    }

  }

}
