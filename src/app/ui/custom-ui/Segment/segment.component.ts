import { Component } from '@angular/core';

@Component({
  selector: 'app-segment',
  styleUrls: ['./segment.component.scss'],
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `
})
export class SegmentComponent {
  get classes(): string {
    return `segment`;
  }
}

