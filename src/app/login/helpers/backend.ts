import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, dematerialize, materialize, mergeMap, Observable, of, throwError } from "rxjs";


const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

@Injectable()
export class BackendInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body} = req;

    return of(null).pipe(mergeMap(handleRoute))
                   .pipe(materialize())
                   .pipe(delay(500))
                   .pipe(dematerialize());
    
    function handleRoute(){
      switch(true){
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        default:
          return next.handle(req)
      }
    }

    function authenticate(){
      const {username, password} = body;
      const user = users.find(x => x.username === username && x.password === password);
      if(!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      })
    }

    function getUsers(){
      if (!isLoggedIn()) return unauthorized();
      return ok(users)
    }

    function ok(body?: any){
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message: string){
      return throwError({ error: {message}});
    }

    function unauthorized(){
      return throwError({status: 401, error: {message: 'Unauthorized'}})
    }

    function isLoggedIn(){
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let BackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
}