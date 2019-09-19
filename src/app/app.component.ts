import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_TITLE } from './utils';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle(APP_TITLE);
  }

  ngOnInit() { }

}
