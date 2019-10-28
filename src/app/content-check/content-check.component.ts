import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector   : 'app-content-check',
  templateUrl: './content-check.component.html',
  styleUrls  : ['./content-check.component.css']
})
export class ContentCheckComponent implements AfterViewInit, OnDestroy {
  @ViewChild('content', { static: true }) contentElement: ElementRef;
  private destroy$ = new Subject();
  empty = true;

  isEmpty(element: HTMLElement): boolean {
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (this.filterNotEmptyNode(nodes.item(i))) {
        return false;
      }
    }
    return true;
  }

  filterNotEmptyNode(node: Node): Node | null {
    if (node) {
      if (node.nodeType === 1 && (node as HTMLElement).outerHTML.toString().trim().length !== 0) {
        // ELEMENT_NODE
        return node;
      } else if (node.nodeType === 3 && node.textContent!.toString().trim().length !== 0) {
        // TEXT_NODE
        return node;
      }
      return null;
    }
    return null;
  }

  checkContent(): void {
    this.empty = this.isEmpty(this.contentElement.nativeElement);
    this.cdr.detectChanges();
  }

  constructor(private contentObserver: ContentObserver, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.contentObserver.observe(this.contentElement.nativeElement).pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.checkContent();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
