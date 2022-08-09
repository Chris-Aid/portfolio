import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  dark: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dark = true;
    window.scrollTo(0, 0);
  }

}
