import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class CanAuthenticationGuard extends KeycloakAuthGuard implements CanActivate {
  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login()
          .catch(e => console.error(e));
        return reject(false);
      }

      const redirect = route.data.noRoleRedirect;
      const requiredRoles: string[] = route.data.roles;
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          if (redirect) {
            this.router.navigateByUrl(redirect, {skipLocationChange: true});
          }
          resolve(false);
        }
        const hasAllRoles = requiredRoles.every(role => this.roles.indexOf(role) > -1);
        if (hasAllRoles) {
          resolve(hasAllRoles);
        } else {
          if (redirect) {
            this.router.navigateByUrl(redirect, {skipLocationChange: true});
          }
          resolve(false);
        }
      }
    });
  }
}
