import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeColor
  (skill) {
    console.log(skill);
    if (skill == 'all') {
      document.getElementById('all').classList.add('clickedButton');
    }
  }

}
