import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector       : 'app-child',
  templateUrl    : './child.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls      : ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  insideParent = false;
  // insideParent = !!this.parentComponent;

  constructor(public cdr: ChangeDetectorRef,
              // @Optional() private parentComponent: ParentComponent
  ) {
  }

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }
}
