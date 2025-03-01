

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecurityRoutingModule } from './security-routing.module';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ValidationModule } from '../validation/validation.module';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [
    UserListComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserLoginComponent,
    UserLogoutComponent,
    UserRegisterComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ValidationModule,
    NgbPaginationModule
  ]
})
export class SecurityModule { }
