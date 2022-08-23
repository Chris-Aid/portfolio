import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})

export class MyWorkComponent implements OnInit {

  hovered1: boolean = false;
  hovered2: boolean = false;
  hovered3: boolean = false;
  hovered4: boolean = false;

  end: number;
  i: number = 1;

  all: boolean = true;
  angular: boolean = false;
  javascript: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.observe();
  }

  observe() {
    if(this.all) { this.i = 1; this.end = 5 }
    if(this. angular || this.javascript) { this.i = 1; this.end = 3 } 

    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        console.log('true')
        let projectAnimation = setInterval(() => {
          document.getElementById(`img` + this.i).classList.add('animateProjects');
          this.i++;
          if (this.i >= this.end) {
            clearInterval(projectAnimation);
            this.intervalStopped = true;
          }
        }, 400)
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".button-container"));
  }

}
