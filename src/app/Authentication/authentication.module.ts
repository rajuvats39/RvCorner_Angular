import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './sinnup/signup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
