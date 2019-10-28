import { Component } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  hasContent = false;

  constructor() {
    setTimeout(() => this.hasContent = true, 3000);
  }
}
