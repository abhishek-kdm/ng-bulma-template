import { Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';

export const CoreRoutes: Routes = [
  { path: '', component: CoreComponent, children: [
    { path: 'home', component: HomeComponent },
  ]},
];


