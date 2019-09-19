import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTE_PATHS } from '../app.route-paths';



@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  routeToLogin() {
    this.router.navigate([ROUTE_PATHS.login]);
  }
}
