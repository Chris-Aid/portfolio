import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Script } from 'vm';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  intervalStopped = false;

  skillImages = ['java script.png', 'angular.png', 'HTML-CSS.png', 'Group 226.png', 'Git-Icon-1788C 2.png', 'Group 20.png', 'rest-api.png', 'test-automation.png', 'database.png'];
  skillTitles = ['Java script', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Database'];

  ngOnInit(): void {
    this.animateSkills();
  }

  animateSkills() {

    document.addEventListener('scroll', () => {
      if(!this.intervalStopped) {
        let i = 8;
        let skillAnimation = setInterval(() => {
          if (window.pageYOffset > 300) {
  
            document.getElementById(`imageContainer-` + i).classList.add('animateSkills');
            i--;
            if (i <= -1) {
              clearInterval(skillAnimation);
              this.intervalStopped = true;
            }
          }
        }, 200);
      }
  
    });
  }

}

