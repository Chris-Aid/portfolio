import { Component, OnInit } from '@angular/core';
import { MovingDots } from '../moving-dots';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new MovingDots();
  }
}
