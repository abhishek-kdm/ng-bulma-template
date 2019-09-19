import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-bulma-nav',
  templateUrl: 'bulma-nav.component.html',
  styleUrls: ['./bulma-nav.component.scss'],
})
export class BulmaNavbarComponent implements OnInit {

  @Input() brandImage: string;
  burger: Burger;


  ngOnInit() {
    this.burger = {
      isActive: false
    };
  }

  toggleBurger() {
    this.burger.isActive = !this.burger.isActive;
  }

}


