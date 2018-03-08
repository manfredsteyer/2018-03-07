import { Component, OnInit, Input } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'tab',
  template: `
    <div *ngIf="visible">
      <h1>{{title}}</h1>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TabComponent {
  @Input() id: number;
  @Input() title: string;
  visible: boolean = true;
}
