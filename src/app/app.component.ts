import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
// currentRoute = '/';

constructor(public router: Router) {

}
// ngOnInit() {
//   this.currentRoute = this.router.url;
//   console.log(this.router.url);
// }

}