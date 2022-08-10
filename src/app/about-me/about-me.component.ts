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
    this.animateJourney();
  }

  animateJourney() {
    document.addEventListener('scroll', (e) => {
      if (!this.intervalStopped) {

        if (window.pageYOffset > 2000) {
          let i = 4;

          let journeyAnimation = setInterval(() => {
            document.getElementById(`myJourney-` + i).classList.add('animateJourney');
            i--;
            if (i <= 0) {
              clearInterval(journeyAnimation);
              this.intervalStopped = true;
            }
          }, 500);
        }
      }

    });

  }

}
