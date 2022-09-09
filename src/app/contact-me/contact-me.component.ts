import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  intervalStopped = false;
  constructor() { }
  ngOnInit(): void {
    this.observe();
  }

  observe() {
    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        let i = 1;
        let formAnimation = setInterval(() => {
          document.getElementById(`form` + i).classList.add('animateContact');
          i++;
          if (i == 4) {
            clearInterval(formAnimation);
          }
        }, 200)
        console.log('Element is fully visible in screen');
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".contact-me-text"));
  }


}