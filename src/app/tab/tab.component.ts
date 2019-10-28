import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector   : 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls  : ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() active = false;
  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
