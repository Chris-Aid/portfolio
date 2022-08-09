import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  container = true;
  constructor(public router: Router) {
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //   console.log(this.getYPosition(e));
    // });
  }

  // getYPosition(e: Event): number {
  //   return (e.target as Element).scrollTop;
  // }
  ngOnInit(): void {


  }

}
