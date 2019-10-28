import { AfterContentInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ContentChildren, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { ChildComponent } from '../child/child.component';

@Component({
  selector       : 'app-parent',
  templateUrl    : './parent.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls      : ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit, OnDestroy {
  private destroy$ = new Subject();

  @ContentChildren(ChildComponent, { descendants: true }) listOfChildComponent: QueryList<ChildComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.listOfChildComponent.changes.pipe(
      startWith(this.listOfChildComponent),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      if (list) {
        list.toArray().forEach(c => {
          c.insideParent = true;
          // c.cdr.detectChanges();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
