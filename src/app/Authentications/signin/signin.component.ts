import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { AppNotificationService } from '../../Shared/notifications/app-notification.service';
import FormValidators from '../../Shared/validation/form-validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: false
})
export class SigninComponent {

  public passwordFieldType: string = 'password';
  public isTextVisible: boolean = false;
  public eyeIcon: string = 'fa-eye-slash';
  public loginForm!: FormGroup;
  public forgetPassword!: string;
  public isValidEmail!: boolean;

  constructor(
    private appNotificationService: AppNotificationService,
      private authService: AuthService,
    private readonly fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public togglePasswordVisibility(): void {
    this.isTextVisible = !this.isTextVisible;
    this.isTextVisible ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isTextVisible ? this.passwordFieldType = 'text' : this.passwordFieldType = 'password';
  }

  public onLogin(): void {
  if (this.loginForm.valid) {
    const formData = this.loginForm.value;
    this.authService.login(formData).subscribe((response) => {
      if (response.isSuccess) {
        this.loginForm.reset();
        this.authService.storeToken(response.accessToken);
        this.authService.storeRefreshToken(response.refreshToken);
        const tokenPayload = this.authService.decodeToken();
        this.appService.setFullNameForStore(tokenPayload.name);
        this.appService.setRoleForStore(tokenPayload.role);
        this.appNotificationService.success(response.message);
        this.router.navigate(['userlist']);
        this.isTextVisible = false;
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  } else {
    FormValidators.validateFormFields(this.loginForm);
  }
}

  public onLogout(): void {
    this.router.navigate(['/authentication/signup']);
  }

  public checkValidEmail(event: string): boolean {
    const value = event;
    const pattern = /^[\w.-]+@([\w-]+\.)+[\w]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

}


