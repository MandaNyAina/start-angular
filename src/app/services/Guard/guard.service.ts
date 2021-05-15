import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private route: Router) { }

  canActivate() {
    const token = this.jwtHelper.tokenGetter();

    if (token && !this.jwtHelper.isTokenExpired()) {
      return true;
    }

    this.route.navigate(['']);
    return false;
  }
}
