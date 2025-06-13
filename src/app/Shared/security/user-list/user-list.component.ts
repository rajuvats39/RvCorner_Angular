import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ModelPopupService } from '../../model-popup/model-popup.service';
import { DialogDataResponse } from '../../model-popup/models/dialog-data-response.model';
import { AppNotificationService } from '../../notifications/app-notification.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    standalone: false
})
export class UserListComponent implements OnInit {


  public userList: any = [];
  public userData: any = [];
  public roleList: any = [];
  public roleData: any = [];
  public setListData: any = {};
  public recordRecordData: any = {};
  public name: string;
  public id: string;
  public email: string;
  public role: string;
  public status: boolean;
  public collectionSize: number;
  public pageSize = 4;
  public page = 1;

  constructor(
    private authenticationService: AuthenticationService,
    private appNotificationService: AppNotificationService,
    private modelPopupService: ModelPopupService
  ) {
    this.refreshGrid();
  }

  ngOnInit(): void {
    this.recordRecordData = {
      setListData: {
        id: '',
        name: '',
        email: '',
        role: '',
        status: ''
      }
    }
    this.getUsers();
    this.getRoles();
  }

  public getUsers(): void {
    this.authenticationService.getAllUser().subscribe((response) => {
      this.userList = response;
      this.userData = response;
      this.collectionSize = this.userList.length;
    })
  }

  public getRoles(): void {
    this.authenticationService.getAllRole().subscribe((response) => {
      this.roleList = response;
      this.roleData = response;
    })
  }

  // public editUser(dataItem): void {
  //   this.recordRecordData = {
  //     setListData: {
  //       id: dataItem.id,
  //       name: dataItem.name,
  //       email: dataItem.email,
  //       role: dataItem.role === '' ? 'UnAssign' : dataItem.role,
  //       status: dataItem.isActive ? 'Active' : 'In-Active'
  //     }
  //   }
  // }

  public editUser(dataItem): void {
    const dialogData = {
      id: dataItem.id,
      name: dataItem.name,
      email: dataItem.email,
      role: dataItem.role,
      status: dataItem.isActive
    };
    this.modelPopupService.open(EditUserComponent, dialogData).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.getUsers();
      }
    });
  }

  public updateUser(form: NgForm): void {
    if (form && !form.valid) {
      return;
    }
    this.authenticationService.updateUser(this.recordRecordData).subscribe((response) => {
      if (response) {
        this.appNotificationService.success('User updated successfull !!');
        this.getUsers();
        form.reset();
      } else {
        this.appNotificationService.error('Somthing went wrong !!');
      }
    })
  }

  public deleteUser(dataItem): void {
    const request: any = {
      name: dataItem.id
    }
    this.authenticationService.deleteUser(request).subscribe((response) => {
      if (response) {
        this.appNotificationService.success('User deleted successfull !!');
        this.getUsers();
      } else {
        this.appNotificationService.error('Somthing went wrong !!');
      }
    })
  }

  public reset(form: NgForm): void {
    form.reset();
  }

  public refreshGrid(): void {
    this.userList = this.userData.map((userList, i) => ({ id: i + 1, ...userList })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  public searchUser(key: any): void {
    this.userData = this.userList.filter((obj) =>
      obj.id.toString().toLowerCase().includes(key.toLowerCase()) ||
      obj.name.toString().toLowerCase().includes(key.toLowerCase()) ||
      obj.email.toString().toLowerCase().includes(key.toLowerCase()) ||
      obj.role.toString().toLowerCase().includes(key.toLowerCase()) ||
      obj.isActive.toString().toLowerCase().includes(key.toLowerCase()) ||
      (obj.value !== null && obj.value.toString().toLowerCase().includes(key.toLowerCase()))
    );
  }

}


