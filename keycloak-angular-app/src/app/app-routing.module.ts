import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { OpenPageComponent } from './pages/open-page/open-page.component';
import { CanAuthenticationGuard } from '../utils/can-authentication.guard';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/open-page',
    pathMatch: 'full'
  },
  { path: 'open-page', component: OpenPageComponent },
  {
    path: 'page-one',
    component: PageOneComponent,
    data: {
      roles: ['csurv-user'],
      noRoleRedirect: '/not-allowed',
    },
    canActivate: [CanAuthenticationGuard]
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    data: {
      roles: ['csurv-admin'],
      noRoleRedirect: '/not-allowed',
    },
    canActivate: [CanAuthenticationGuard]
  },
  { path: 'not-allowed', component: NotAllowedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAuthenticationGuard]
})
export class AppRoutingModule { }
