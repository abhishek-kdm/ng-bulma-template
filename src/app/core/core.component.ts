import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
})
export class CoreComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.redirectAnonymousToDefault();
  }
}
