import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector   : 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls  : ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {
  @ContentChildren(TabComponent) listOfTabComponent: QueryList<TabComponent>;

  constructor() {
  }

  ngOnInit() {
  }

}
