import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {
  componentName = 'menu';

  constructor() {
    super();
  }
}
