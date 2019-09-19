import { BulmaUIModule } from './bulma/bulma.module';
import { CustomUIModule } from './custom-ui/custom-ui.module';
import { NgModule } from '@angular/core';


const moduels = [BulmaUIModule, CustomUIModule];

@NgModule({
  imports: moduels,
  exports: moduels,
})
export class UIModule { }

