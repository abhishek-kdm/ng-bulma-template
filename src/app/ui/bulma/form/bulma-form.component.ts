import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-bulma-field-input',
  styleUrls: ['./bulma-form.component.scss'],
  template: `
    <div class="field">
      <label class="label">{{ label }}</label>
      <div [ngClass]="classes">
        <input
          class="input"
          [ngClass]="Intent"
          [type]="type"
          [placeholder]="placeholder"
          [required]="required"
        />
        <span *ngIf="icons && icons.left" class="icon is-small is-left">
          <i [class]="icons.left"></i>
        </span>
        <span *ngIf="icons && icons.right" class="icon is-small is-right">
          <i [class]="icons.right"></i>
        </span>
      </div>
      <p *ngIf="helpMessage" class="help" [ngClass]="Intent">
        {{ helpMessage }}
      </p>
    </div>
  `,
})
export class BulmaFieldInputComponent implements OnChanges {
  @Input() label: string;
  @Input() intent: string;
  @Input() helpMessage: string;
  @Input() icons: { [icon: string]: string };
  @Input() required: boolean;

  @Input() type = 'text';
  @Input() value = '';
  @Input() placeholder = '';

  Intent: string | null;

  constructor() {
    this.Intent = null;
  }

  ngOnChanges({ intent }: SimpleChanges) {
    if (intent && intent.currentValue !== intent.previousValue) {
      this.Intent = `is-${(intent.currentValue as string)}`;
    }
  }


  get classes(): string {
    const c = ['control'];
    if (this.icons) {
      if (this.icons.left) { c.push('has-icons-left'); }
      if (this.icons.right) { c.push('has-icons-right'); }
    }
    return c.join(' ');
  }

}




@Component({
  selector: 'app-bulma-field-checkbox',
  styleUrls: ['./bulma-form.component.scss'],
  template: `
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input
            type="checkbox"
            [name]="name"
            [value]="value"
            [checked]="checked"
            [required]="required"
          />
          <ng-content></ng-content>
        </label>
      </div>
      <p *ngIf="helpMessage" class="help" [ngClass]="Intent">
        {{ helpMessage }}
      </p>
    </div>
  `,
})
export class BulmaFieldCheckboxComponent implements OnChanges {
  @Input() intent: string;
  @Input() helpMessage: string;

  @Input() name: string;
  @Input() required: boolean;
  @Input() checked = false;
  @Input() value = '';

  Intent: string | null;

  constructor() {
    this.Intent = null;
  }

  ngOnChanges({ intent }: SimpleChanges) {
    if (intent && intent.currentValue !== intent.previousValue) {
      this.Intent = `is-${(intent.currentValue as string)}`;
    }
  }

}


