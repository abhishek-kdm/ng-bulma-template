import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreRoutes } from './core/core.routes';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultComponent } from './default/default.component';

import { ROUTE_PATHS } from './app.route-paths';


const routes: Routes = [
  { path: ROUTE_PATHS.core, children: CoreRoutes },

  { path: ROUTE_PATHS.register, component: RegisterComponent },
  { path: ROUTE_PATHS.login, component: LoginComponent },
  { path: ROUTE_PATHS.logout, component: LogoutComponent },

  { path: ROUTE_PATHS.default, component: DefaultComponent },
  { path: ROUTE_PATHS.unknown, component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
