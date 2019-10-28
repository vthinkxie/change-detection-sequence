import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseServiceToken, MenuServiceFactory } from '../menu.token';

@Component({
  selector   : 'app-menu-item',
  templateUrl: './menu-item.component.html',
  providers: [
    BaseService,
    {
      provide: BaseServiceToken,
      useFactory: MenuServiceFactory,
      deps: [[new SkipSelf(), new Optional(), BaseServiceToken], BaseService]
    }
  ],
  styleUrls  : ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor(@Inject(BaseServiceToken) private baseService: BaseService) {
  }

  get rootComponentName() {
    return this.baseService.componentName;
  }

  ngOnInit() {
  }

}
