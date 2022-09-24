import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() darkMode: boolean;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(site) {
    window.open(site, "_blank");
  }
}
