import { Directive, OnInit, Optional, TemplateRef } from '@angular/core';
import { CopyComponent } from './copy.component';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective implements OnInit {
  constructor(public template: TemplateRef<any>, @Optional() private copyComponent: CopyComponent) {
    this.copyComponent.template = this.template;
  }

  ngOnInit() {
  }

}
