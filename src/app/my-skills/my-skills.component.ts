import { Component, OnInit } from '@angular/core';
// import { Script } from 'vm';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skillImages = ['java script.png', 'angular.png', 'HTML-CSS.png', 'Group 226.png', 'Git-Icon-1788C 2.png', 'Group 20.png', 'rest-api.png', 'test-automation.png', 'database.png'];
  skillTitles = ['Java script', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation.png', 'Database'];
  ngOnInit(): void {

  }


}

