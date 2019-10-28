import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }

}
