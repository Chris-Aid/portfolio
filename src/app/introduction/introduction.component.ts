import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  // @ViewChild('form1') form1: ElementRef;
  constructor() { }

  ngOnInit(): void {
    // this.form1.nativeElement.classList.add('geometric-froms')
  }
}
