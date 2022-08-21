import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  loaded1 = false;
  loaded2 = false;
  loaded3 = false;


  intervalStopped = false;
  constructor() { }
  ngOnInit(): void {
    // this.animateForm();
    this.observe();

  }

  animateForm() {
    document.addEventListener('scroll', (e) => {
      if (!this.intervalStopped) {

        if (window.pageYOffset > 2800) {
          this.loaded1 = true
        } 
         if (window.pageYOffset > 3000) {
          this.loaded2 = true;
        } 
         if (window.pageYOffset > 3200) {
          this.loaded3 = true;
        }
      }

    });
  }

  observe() {
    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        console.log('Element is fully visible in screen');
        this.loaded1 = true;
        this.loaded2 = true;
        this.loaded3 = true;
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".content"));
  }
}