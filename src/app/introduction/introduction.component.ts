import { compileClassMetadata } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  yOfMouse: number;


  ngOnInit(): void {
    this.animateText();
  }

  animateText() {

    const introText = document.querySelector('.my-introduction');
    const stringText = introText.textContent;
    const splitText = stringText.split('');

    introText.textContent = "";
    console.log(splitText)
    for (let i = 0; i < splitText.length; i++) {
      if (splitText[i] == ',') {
        introText.innerHTML += '<span>' + splitText[i] + '</span>' + '<br>';
      } else {
        introText.innerHTML += '<span>' + splitText[i] + '</span>';
      }
    }
    console.log(introText)
    this.onTick(splitText, introText)

  }

  onTick(splitText, introText) {
    let char = 0;
    let timer = setInterval(() => {
      let span = document.querySelectorAll('span')[char]
      span.classList.add('fake');
      char++;
      if (char === splitText.length) {
        clearInterval(timer);
        this.addColor(splitText, span);

      }
    }, 50);
  }

  addColor(splitText, span) {
    console.log('jetz')
    let number = 0;
    let addColor = setInterval(() => {
      const span = document.querySelectorAll('span')[number];

      if (number === 8 ||  number === 9 ||  number === 10 ||  number === 11 ||  number === 12) {
        span.classList.add('addFullColor');
      } else if (number === 44 ) {
        span.classList.add('addFullColorGreen');
      } else {
        span.classList.add('addColor');
      }

      number++;
      if (number === splitText.length) {
        clearInterval(addColor);
        this.styleContactButton();
        number = 0;
      }
    }, 50);
  }

  styleContactButton() {
    let btn = document.getElementById('contactButton');
    btn.classList.add('showButton')
  }





  // animateIntro() {
  //   let introDiv = document.getElementById('introDiv');
  //   let introDiv2 = document.getElementById('introDiv2');
  //   let introDiv3 = document.getElementById('introDiv3');
  //   let buttonHider4 = document.getElementById('buttonHider4');

  //   this.loaded = true;
  //   setTimeout(() => {
  //     introDiv.style.display = 'none';
  //     this.loaded2 = true;
  //   }, 1000);
  //   setTimeout(() => {
  //     introDiv2.style.display = 'none';
  //     this.loaded3 = true;
  //   }, 2500);


  //   setTimeout(() => {
  //     this.loaded4 = true;
  //   }, 3500);

  // setTimeout(() => {
  //   this.loaded4 = true;
  // }, 2800);


  // setTimeout(() => {
  //   introDiv3.style.display = 'none';
  //   buttonHider4.style.display = 'none';

  // }, 4500);

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

  // pushRandomNumber() {
  //   for (let i = 0; i < 50; i++) {
  //     let posX = 95 * Math.random()
  //     this.randomNumbers1.push(posX);
  //   }

  //   for (let i = 0; i < 50; i++) {
  //     let posX = 95 * Math.random()
  //     this.randomNumbers2.push(posX);
  //   }

  //   for (let i = 0; i < 50; i++) {
  //     let posX = 95 * Math.random()
  //     this.randomNumbers3.push(posX);
  //   }
  // }

  // randomNumber(i: number, star: number) {
  //   let maxDelay = 3 * Math.random();
  //   if (star == 1) {
  //     return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers1[i] + 'vw' };
  //   } else if (star == 2) {
  //     return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers2[i] + 'vw' };
  //   } else {
  //     return { 'animation-delay': maxDelay + 's', 'left': this.randomNumbers3[i] + 'vw' };
  //   }

  // }
}
