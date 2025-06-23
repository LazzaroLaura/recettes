import { Component } from '@angular/core';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.less']
})
export class CookiesComponent {

  OnInit() {
    console.log("CookiesComponent");
  }
}
