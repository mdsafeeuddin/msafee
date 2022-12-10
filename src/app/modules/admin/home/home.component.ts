import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../../app/services/authentication.service";

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html'
})

export class AdminHomeComponent{

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ){

  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }
}