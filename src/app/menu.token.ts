import { InjectionToken, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { DropdownService } from './dropdown.service';

export const BaseServiceToken = new InjectionToken<BaseService>('BaseServiceToken');


export function MenuServiceFactory(
  higherOrderService: BaseService,
  currentService: BaseService
): BaseService {
  return higherOrderService ? higherOrderService : currentService;
}

export function DropdownServiceFactory(injector: Injector): DropdownService {
  return injector.get(DropdownService);
}
