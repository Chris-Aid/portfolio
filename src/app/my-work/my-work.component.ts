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
  }

}
