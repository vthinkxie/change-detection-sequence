import { Component, Injector, OnInit, Self } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { BaseServiceToken, DropdownServiceFactory } from '../menu.token';
@Component({
  selector   : 'app-dropdown',
  templateUrl: './dropdown.component.html',
  providers  : [
    DropdownService,
    {
      provide   : BaseServiceToken,
      useFactory: DropdownServiceFactory,
      deps      : [[new Self(), Injector]]
    }
  ],
  styleUrls  : ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
