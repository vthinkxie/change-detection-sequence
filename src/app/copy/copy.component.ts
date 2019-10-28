import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector   : 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls  : ['./copy.component.css']
})
export class CopyComponent implements OnInit, OnChanges {
  template: TemplateRef<any>;
  @Input() repeat = 1;
  repeatArray = new Array(this.repeat).fill(0).map(() => 0);

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.repeatArray = new Array(this.repeat).fill(0).map(() => 0);
  }

}
