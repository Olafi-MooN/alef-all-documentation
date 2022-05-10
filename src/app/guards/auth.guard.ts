import { getUser } from '../shared/utils/getUser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (getUser()?.user?.email) {
      return true;
    } else {
      this.router.navigateByUrl('login', { state: {prevPath: route.url.map(a => a.path).join('/')}});
      return false;
    }
  }

}
