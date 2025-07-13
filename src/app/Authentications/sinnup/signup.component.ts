import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import FormValidators from '../../Shared/validation/form-validators';
import { AppNotificationService } from '../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: false
})
export class SignupComponent {

  public passwordFieldType: string = 'password';
  public isTextVisible: boolean = false;
  public eyeIcon: string = 'fa-eye-slash';
  public signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appNotificationService: AppNotificationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSignup(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.signup(formData).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          this.signupForm.reset();
          this.isTextVisible = false;
          this.router.navigate(['/authentication/signin']);
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    } else {
      FormValidators.validateFormFields(this.signupForm);
    }
  }

  public togglePasswordVisibility(): void {
    this.isTextVisible = !this.isTextVisible;
    this.passwordFieldType = this.isTextVisible ? 'text' : 'password';
    this.eyeIcon = this.isTextVisible ? 'fa-eye' : 'fa-eye-slash';
  }

}
