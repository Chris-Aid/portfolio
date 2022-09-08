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

  all: boolean = true;
  angular: boolean = false;
  javascript: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.observe();
  }

  observe() {
    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        let i = 1;
        let projectAnimation = setInterval(() => {
            document.getElementById(`img` + i).classList.add('animateProjects');
          i++;
          if (i == 5) {
            clearInterval(projectAnimation);
          }
        }, 400)
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".button-container"));
  }


  changeTo(section) {
    if(section == 'angular') {
      let i = 3;
      let end = 5;
      this.startAnimation(i, end);
    } else if (section == 'javascript'){
      let i = 1;
      let end = 3;
      this.startAnimation(i, end);
    } else {
      let i = 1;
      let end = 5;
      this.startAnimation(i, end);
    }
  }

  startAnimation(i, end) {
    let AngularAnimation = setInterval(() => {
      document.getElementById(`img` + i).classList.add('animateProjects');
    i++;
    if (i == end) {
      clearInterval(AngularAnimation);
    }
  }, 400)
  }

  navigateTo(site) {
    window.open(site, "_blank");
  }
}
