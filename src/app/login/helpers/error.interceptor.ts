import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "../../services/authentication.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private authenticationService: AuthenticationService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if(err.status === 401){
        this.authenticationService.logout();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return throwError(error)
    }))
  }
}