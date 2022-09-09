import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';
// import { Script } from 'vm';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  intervalStopped = false;

  mainImages = ['angular.png', 'js.png', 'html.png'];
  secondImages = ['scrum.png', 'git.png', 'design.png'];
  lastImages = ['api.png', 'wp.png', 'firebase.png'];
  mainTitles = ['JAVA SCRIPT', 'ANGULAR', 'HTML / CSS'];
  secondTitles = ['SCRUM', 'GIT', 'DESIGN'];
  lastTitles = ['REST API', 'WORDPRESS', 'FIREBASE'];

  ngOnInit(): void {
    // this.observe();
  }

  // observe() {
  //   let observer = new IntersectionObserver(function (entries) {
  //     if (entries[0].isIntersecting === true) {
  //       let i = 0;
  //       let skillAnimation = setInterval(() => {
  //         document.getElementById(`imageContainer-` + i).classList.add('animateSkills');
  //         i++;
  //         if (i >= 3) {
  //           clearInterval(skillAnimation);
  //           this.intervalStopped = true;
  //           i = 0;
  //           this.secondAnimation(i);
  //         }
  //       }, 200);

  //     }
  //   }, { threshold: [1] });

  //   observer.observe(document.querySelector(".container1"));
  //   observer.observe(document.querySelector(".container2"));
  //   observer.observe(document.querySelector(".container3"));
  // }
}

