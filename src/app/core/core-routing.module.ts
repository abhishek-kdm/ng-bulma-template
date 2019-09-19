import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutes } from './core.routes';


@NgModule({
  imports: [RouterModule.forChild(CoreRoutes)],
})
export class CoreRoutingModule { }
