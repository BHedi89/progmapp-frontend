import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.loginService.isLoggedIn
  //     .pipe(
  //       take(1),
  //       map((isLoggedIn: boolean) => {
  //         if (!isLoggedIn) {
  //           return false;
  //         }
  //         return true;
  //       })
  //     );
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   const currentUser = this.loginService.currentUser;
  //   if (currentUser) {
  //     if (route.data.roles && route.data.roles.indexOf(currentUser.) === -1 && this.loginService.isLoggedIn$) {
  //       this.router.navigate(['main-page']);
  //       return false;
  //     }
  //     return true;
  //   }
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //   return false;
  // }
}
