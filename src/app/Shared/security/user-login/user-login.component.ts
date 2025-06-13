import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AppNotificationService } from '../../notifications/app-notification.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrl: './user-login.component.scss',
    standalone: false
})
export class UserLoginComponent {

  public userName: string;
  public password: string;

  constructor(
    private appNotificationService: AppNotificationService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  public userLogin(form: NgForm): void {
    if (form && !form.valid) {
      return;
    }
    const request: any = {
      userName: this.userName,
      // password: this.password,
    };
    this.authenticationService.getUserById(request).subscribe((response) => {
      // if (response) {
      if (response.password === request.password) {
        if (response.isActive) {
          sessionStorage.setItem('userName', response.id);
          sessionStorage.setItem('role', response.role);
          this.router.navigate(['']);
          form.reset();
          this.appNotificationService.success('Login successful !!');
        } else {
          this.appNotificationService.error('Please Connect to Admin' + 'Inactive User');
        }
      } else {
        this.appNotificationService.error('Invalid Credentials');
      }
      // }
    })
  }
}


