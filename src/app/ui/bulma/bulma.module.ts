import { NgModule } from '@angular/core';

import { BulmaNavbarComponent } from './navbar/bulma-nav.component';
import { CommonModule } from '@angular/common';
import { BulmaFieldInputComponent, BulmaFieldCheckboxComponent } from './form/bulma-form.component';

const components = [
  BulmaNavbarComponent,
  BulmaFieldInputComponent,
  BulmaFieldCheckboxComponent,
];


@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class BulmaUIModule {}
