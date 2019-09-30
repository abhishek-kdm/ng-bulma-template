import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTE_PATHS } from '../app.route-paths';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from '../utils';



@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
  ) {
    this.titleService.setTitle(`${APP_TITLE}`);
  }

  ngOnInit() { }

  routeToLogin() {
    this.router.navigate([ROUTE_PATHS.login]);
  }

  routeToRegister() {
    this.router.navigate([ROUTE_PATHS.register]);
  }
}
