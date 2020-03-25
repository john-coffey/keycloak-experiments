import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService, AuthConfig } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { OpenPageComponent } from './pages/open-page/open-page.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { AuthConfigService } from '../utils/authconfig.service';
import { initializer } from '../utils/app-init';
import { authConfig } from '../utils/auth-config';
import { PageThreeComponent } from './pages/page-three/page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    OpenPageComponent,
    NotAllowedComponent,
    PageThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
        resourceServer: {
            allowedUrls: ['http://localhost:3000/'],
            sendAccessToken: true
        }
    }),
  ],
  providers: [
    AuthConfigService,
    { provide: AuthConfig, useValue: authConfig },

    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [ AuthConfigService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
