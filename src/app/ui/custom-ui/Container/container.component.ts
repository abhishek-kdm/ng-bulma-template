import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  styleUrls: ['./container.component.scss'],
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `
})
export class ContainerComponent {
  get classes() { return 'container'; }
}
