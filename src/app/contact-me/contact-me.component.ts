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
    this.animateForm();
  }

  animateForm() {
    document.addEventListener('scroll', (e) => {
      if (!this.intervalStopped) {
        console.log(window.pageYOffset)
        if (window.pageYOffset > 2550) {
          this.loaded1 = true
        } 
         if (window.pageYOffset > 2620) {
          this.loaded2 = true;
        } 
         if (window.pageYOffset > 2760) {
          this.loaded3 = true;
        }
      }

    });
  }
}
