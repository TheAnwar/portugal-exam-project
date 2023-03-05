import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class LoggedGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.loggedIn$.pipe(
      map((loggedIn) => {
        console.log(loggedIn);
        if (!loggedIn) {
          return true;
        }

        this.router.navigate(['dashboard']);
        return false;
      })
    );
  }
}
