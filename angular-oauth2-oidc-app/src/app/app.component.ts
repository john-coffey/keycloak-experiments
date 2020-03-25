import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-oauth2-oidc-app';

  constructor(private readonly oauthService: OAuthService) { }

  logout() {
    this.oauthService.logOut();
  }
  
}
