import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {

    const introText = document.querySelector('.my-introduction');
    const stringText = introText.textContent;
    const splitText = stringText.split('');

    introText.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
      if (splitText[i] == ',') {
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

      if (number === 8 || number === 9 || number === 10 || number === 11 || number === 12) {
        span.classList.add('addFullColor');
      } else if (number === 43) {
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
}
