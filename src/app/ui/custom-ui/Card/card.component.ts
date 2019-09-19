import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card">
      <ng-content select="[header]"></ng-content>
      <ng-content select="[body]"></ng-content>
      <ng-content select="[footer]"></ng-content>
    </div>
  `,
})
export class CardComponent { }


@Component({
  selector: 'app-card-header',
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardHeaderComponent {
  get classes(): string { return 'card-header'; }
}


@Component({
  selector: 'app-card-body',
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardBodyComponent {
  get classes(): string { return 'card-body'; }
}


@Component({
  selector: 'app-card-footer',
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardFooterComponent {
  get classes(): string { return 'card-footer'; }
}

