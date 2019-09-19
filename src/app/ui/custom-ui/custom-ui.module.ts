import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SegmentComponent } from './Segment/segment.component';
import { ContainerComponent } from './Container/container.component';

import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent
} from './Card/card.component';


const components = [
  SegmentComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  ContainerComponent,
];


@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class CustomUIModule { }
