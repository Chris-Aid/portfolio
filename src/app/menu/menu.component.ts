
import { HighContrastModeDetector } from '@angular/cdk/a11y';
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
      this.hideSecondBackgroundColor();
    } else {
      this.imgColor = 'white'
    }
  }

  hideSecondBackgroundColor() {
    let background = document.getElementById('headerBackground');
    background.style.display = 'none';
  }

  getStyleOfMenu() {
    let background: string;
    if (this.darkMode) {
      background = 'white'
    } else {
      background = 'black'
    }
    return {'color': this.imgColor, 'background-color': background}

  }
}
