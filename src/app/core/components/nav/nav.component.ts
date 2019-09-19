import { Component, OnInit, ViewChild } from '@angular/core';
import { BulmaNavbarComponent } from 'src/app/ui/bulma/navbar/bulma-nav.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @ViewChild(
    BulmaNavbarComponent,
    { static: false }
  ) nav: BulmaNavbarComponent;

  public brandImage: string;


  ngOnInit() {
    this.brandImage = 'https://bulma.io/images/bulma-logo.png';
  }

  toggleBurger() {
    this.nav.toggleBurger();
  }
}
