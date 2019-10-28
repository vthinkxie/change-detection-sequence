import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuServiceFactory, BaseServiceToken } from '../menu.token';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [
    MenuService,
    {
      provide: BaseServiceToken,
      useFactory: MenuServiceFactory,
      deps: [[new SkipSelf(), new Optional(), BaseServiceToken], MenuService]
    }
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
