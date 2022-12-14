import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../../services/authentication.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser = this.authenticationService.currentUserValue;
    if(Object.keys(currentUser).length !=0) {
      return true
    }else{
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    };
  }
}