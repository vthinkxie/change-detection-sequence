import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownService extends BaseService {
  componentName = 'dropdown';

  constructor() {
    super();
  }
}
