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

  skillImages = ['java script.png', 'angular.png', 'HTML-CSS.png', 'Group 226.png', 'Git-Icon-1788C 2.png', 'design-thinking.png', 'rest-api.png', 'wordpress.png', 'database1.png'];
  skillTitles = ['Java script', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Wordpress', 'Firebase'];

  ngOnInit(): void {
    this.observe();
  }

  observe() {
    let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        let i = 0;
        let skillAnimation = setInterval(() => {
          document.getElementById(`imageContainer-` + i).classList.add('animateSkills');
          i++;
          if (i >= 9) {
            clearInterval(skillAnimation);
            this.intervalStopped = true;
          }
        }, 200)
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector(".subject-container"));
  }
}

