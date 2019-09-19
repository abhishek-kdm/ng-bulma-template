import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AUTH_TOKEN_IDENTIFIER } from '../utils';
import { ROUTE_PATHS } from '../app.route-paths';



@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) { }


  // basic authorization methods.
  registerToken(token: string): void {
    localStorage.setItem(AUTH_TOKEN_IDENTIFIER, token);
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_IDENTIFIER);
    this.router.navigate([ROUTE_PATHS.default]);
  }

  userLoggedIn(): boolean { return !!this.authorizationToken.length; }

  get authorizationToken(): string {
    return (localStorage.getItem(AUTH_TOKEN_IDENTIFIER) || '').trim();
  }


  // check methods.
  redirectAnonymousToDefault() {
    if (!this.userLoggedIn()) {
      this.router.navigate([ROUTE_PATHS.default]);
    }
  }

  redirectUserToHome() {
    if (this.userLoggedIn()) {
      this.router.navigate([ROUTE_PATHS.core]);
    }
  }


}
