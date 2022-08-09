
import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {

  // @ViewChild('menuElement') menuElement: ElementRef;

  @Input() darkMode: boolean = false;
  @Input() container = true;
  @Input() imgColor: string;
  constructor(public router: Router) {

  }

  ngOnChanges() {
    this.changeMenuBar();
  }

  changeMenuBar() {
    if (this.darkMode) {
      this.imgColor = 'black'
    } else {
      this.imgColor = 'white'
    }
  }
}
