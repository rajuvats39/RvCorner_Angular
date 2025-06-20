import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ValidationModule } from '../validation/validation.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ValidationModule,
    NgModule
  ]
})
export class LayoutModule { }
