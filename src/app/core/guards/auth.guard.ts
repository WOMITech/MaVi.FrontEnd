import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { Security } from 'src/app/utils/security.util';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService
    ) { }

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let tempoFim = Security.GetLoggedUserTokenExpirationDate();


        if (Security.hasToken() && !Security.hasExpiredToken()) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        Security.clear();
        this.router.navigate(['/account/login-2'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
