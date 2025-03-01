import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AppNotificationService } from '../../notifications/app-notification.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent {

  public name: string;
  public id: string;
  public email: string;
  public password: string;
  public isActive: boolean = false;
  public role: string;

  constructor(
    private appNotificationService: AppNotificationService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public userRegister(form: NgForm): void {
    if (form && !form.valid) {
      return;
    }
    const request: any = {
      name: this.name,
      id: this.id,
      email: this.email,
      password: this.password,
      role: '',
      isActive: this.isActive,
    };
    this.authenticationService.registerUser(request).subscribe((response) => {
      if (response) {
        this.appNotificationService.success('Registration successful, Please Contact Admin for enable to access user');
        this.router.navigate(['/login']);
      } else {
        this.appNotificationService.error('Something is wrong');
      }
    });
  }

  public userLogin(): void {
    this.router.navigate(['/login']);
  }

}
