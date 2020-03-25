import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPageComponent } from './pages/open-page/open-page.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from '../utils/app-init';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenPageComponent,
    PageTwoComponent,
    PageOneComponent,
    NotAllowedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [ KeycloakService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
