import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  intervalStopped = false;
  constructor() { }

  ngOnInit(): void {
    this.observe();
  }

  observe() {
    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        let i = 1;

          let journeyAnimation = setInterval(() => {
            document.getElementById(`myJourney-` + i).classList.add('animateJourney');
            i++;
            if (i >= 5) {
              clearInterval(journeyAnimation);
              this.intervalStopped = true;
            }
          }, 500);
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".introduction"));
  }
}
