import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { AppNotificationService } from '../../Shared/notifications/app-notification.service';
import { AuthService } from '../../Authentications/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: false
})
export class UserListComponent implements OnInit {

  public allUsers: any[] = [];
  public fullName: string = '';
  public role: string = '';

  constructor(
    private readonly appNotificationService: AppNotificationService,
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.appService.getFullNameFromStore().subscribe((name) => {
      this.fullName = name || this.authService.getFullNameFromToken();
    });

    this.appService.getRoleFromStore().subscribe((role) => {
      this.role = role || this.authService.getRoleFromToken();
    });

    const name = this.authService.getFullNameFromToken();
    this.appService.setFullNameForStore(name);

    const role = this.authService.getRoleFromToken();
    this.appService.setRoleForStore(role);
  }

  public getAllUsers(): void {
    this.authService.getAllUsers().subscribe((response) => {
      this.allUsers = response.data;
    });
  }

  public editedRow: number | null = null;
  public editableUser: any = {};

  editUser(index: number): void {
    this.editedRow = index;
    this.editableUser = { ...this.allUsers[index] };
  }

  cancelEdit(): void {
    this.editedRow = null;
    this.editableUser = {};
  }

  public updateUser(index: number): void {
    this.allUsers[index] = { ...this.editableUser };
    const request: any = {
      Id: this.editableUser.id,
      FirstName: this.editableUser.firstName,
      LastName: this.editableUser.lastName,
      UserName: this.editableUser.userName,
      Email: this.editableUser.email,
      Password: this.editableUser.password,
      Role: this.editableUser.role
    };
    this.authService.updateUser(request).subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.getAllUsers();
      }
    });
    this.editedRow = null;
    this.editableUser = {};
  }

  public deleteUser(userId: number): void {
    const request: any = {
      Id: userId
    };
    this.authService.deleteUser(request).subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.getAllUsers();
      }
    });
  }

}
