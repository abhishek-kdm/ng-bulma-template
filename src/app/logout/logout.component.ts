import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from '../utils';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private titleService: Title,
  ) {
    this.titleService.setTitle(`Logging out | ${APP_TITLE}`);
  }

  ngOnInit() {
    setTimeout(() => {
      this.authService.logout();
    }, 2000);
  }

}
