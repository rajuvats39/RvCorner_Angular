import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AppNotificationService } from '../Shared/notifications/app-notification.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private appNotificationService: AppNotificationService
    ) { }

    canActivate(): boolean {
        console.log('AuthGuard check - token:', this.authService.getToken());
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.appNotificationService.warning('You are not authorized to access this page. Please login first!');
            this.router.navigate(['login']);
            return false;
        }
    }
}