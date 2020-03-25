import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'keycloak-angular-app';

  loggedIn$ = from(this.keycloakService.isLoggedIn());

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
    console.log('*** onInit', this.keycloakService);
  }

  doLogin() {
    this.keycloakService.login();
  }

  doLogout() {
    this.keycloakService.logout();
  }
}
