import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_TITLE } from '../utils';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private authService: AuthService,
  ) {
    this.titleService.setTitle(`Login | ${APP_TITLE}`);
  }

  ngOnInit() {
    // this.authService.redirectUserToHome();
  }


}
