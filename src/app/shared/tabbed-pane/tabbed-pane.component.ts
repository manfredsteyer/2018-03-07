import { Component, OnInit, AfterContentInit, Input, EventEmitter, Output, QueryList, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css']
})
export class TabbedPaneComponent implements AfterContentInit {

  @Input() activatedId: number;
  get tabs(): TabComponent[] {
    if (!this.tabList) return [];
    return this.tabList.toArray();
  }

  get currentTitle(): string {
    return this
            .tabs
            .find(t => t.id == this.activatedId)
            .title;
  }

  expand() {
    for(let tab of this.tabs) {
      tab.visible = true;
    }
  }

  collapse() {
    this.activate();
  }


  @Output() activatedIdChange = new EventEmitter<number>();

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;


  activate(): void {
    for(let tab of this.tabs) {
      tab.visible = tab.id == this.activatedId;
    }
  }

  jump(id: number): void {
    this.activatedId = id;
    this.activate();
    this.activatedIdChange.emit(id);
  }

  constructor() { }

  ngAfterContentInit(): void {
    this.activate();
  }

}
