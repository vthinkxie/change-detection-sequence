import { Component } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  display = false;

  constructor() {
    setTimeout(() => this.display = true, 3000);
  }
}
