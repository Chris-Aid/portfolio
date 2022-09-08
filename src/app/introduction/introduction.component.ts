import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {

    const introText = document.querySelector('.my-introduction');
    const stringText = introText.textContent;
    const splitText = stringText.split('');

    introText.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
      if (splitText[i] == ' ') {
        introText.innerHTML += '<span>' + splitText[i] + '</span>' + '<br>';
      } else {
        introText.innerHTML += '<span>' + splitText[i] + '</span>';
      }
    }
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
    let number = 0;
    let addColor = setInterval(() => {
      const span = document.querySelectorAll('span')[number];

      if (number === 5 || number === 6 || number === 7 || number ===8 || number === 9) {
        span.classList.add('addFullColor');
      } else if (number === 43) {
        span.classList.add('addFullColorGreen');
      } else {
        span.classList.add('addColor');
      }

      number++;
      if (number === splitText.length) {
        clearInterval(addColor);
        // this.styleContactButton();
        this.showMyText();
        number = 0;
      }
    }, 50);
  }

  showMyText() {
    console.log('now')
    let txt = document.getElementById('introText');
    txt.classList.add('about-me-text');
  }

  styleContactButton() {
    let btn = document.getElementById('contactButton');
    btn.classList.add('showButton')
  }
}
