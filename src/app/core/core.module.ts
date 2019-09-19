import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

import { AppRoutingModule } from '../app-routing.module';
import { UIModule } from '../ui/ui.module';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';


const components = [
  CoreComponent,
  HomeComponent,
  NavComponent
];

@NgModule({
  imports: [
    UIModule,
    CommonModule,
    AppRoutingModule,
    CoreRoutingModule,
  ],
  declarations: components,
  exports: [...components, CoreRoutingModule],
})
export class CoreModule { }
