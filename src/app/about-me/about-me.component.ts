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
        console.log(window.pageYOffset)
        if (window.pageYOffset > 1750) {
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
      }

    });

  }

}
