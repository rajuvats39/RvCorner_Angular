import { DialogDataResponse } from './../../../../Shared/model-popup/models/dialog-data-response.model';
import { ModelPopupService } from './../../../../Shared/model-popup/model-popup.service';
import { Component, OnInit } from '@angular/core';
import { AppNotificationService } from '../../../../Shared/notifications/app-notification.service';
import { EmployeesManagementService } from '../employees-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MydevelopmentSharedService } from '../../mydevelopment-shared.service';
import { DialogData } from '../../../../Shared/model-popup/models/dialog-data.model';
import { ConfirmationDialogComponent } from '../../../../Shared/model-popup/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-employees-departments-list',
  standalone: false,
  templateUrl: './employees-departments-list.component.html',
  styleUrls: ['./employees-departments-list.component.scss']
})
export class EmployeesDepartmentsListComponent implements OnInit {

  public employeeList: any[] = [];
  public currentPage: number = 1;
  public pageSize: number = 5;
  public employeeData: any[] = [];
  public departmentList: any[] = [];
  public departmentData: any[] = [];
  public isEmployee: boolean;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly modelPopupService: ModelPopupService,
    private readonly appNotificationService: AppNotificationService,
    private readonly employeesManagementService: EmployeesManagementService,
    private readonly mydevelopmentSharedService: MydevelopmentSharedService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isEmployee = params['isEmployee'] === 'true';
      if (this.isEmployee) {
        this.getAllEmployees();
      } else {
        this.getAllDepartments();
      }
    });
  }

  public getAllEmployees(): void {
    this.employeesManagementService.getAllEmployees().subscribe((response) => {
      if (response.isSuccess) {
        this.employeeList = response.data;
        this.updatePaginatedData();
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  }

  public updateEmployee(dataItem): void {
    this.mydevelopmentSharedService.setMyDevDetails({
      employeeId: dataItem.employeeId,
      firstName: dataItem.firstName,
      lastName: dataItem.lastName,
      email: dataItem.email,
      phoneNumber: dataItem.phoneNumber,
      dateOfBirth: dataItem.dateOfBirth,
      joiningDate: dataItem.joiningDate,
      departmentId: dataItem.departmentId,
      departmentName: dataItem.departmentName,
      gender: dataItem.gender,
      skills: dataItem.skills,
      resumePath: dataItem.resumePath,
      profileImage: dataItem.profileImage,
      isActive: dataItem.isActive,
      salary: dataItem.salary,
      experienceYears: dataItem.experienceYears,
      passwordHash: dataItem.passwordHash,
      bio: dataItem.bio,
    });
    this.router.navigate(['/myDevelopment/employeesManagement']);
  }

  public deleteEmployee(dataItem): void {
    const dialog: DialogData = {
      title: "Delete Employee",
      message: "Are you sure you want to delete this employee?",
      secondaryBtnTxt: "Cancel",
      dangerBtnTxt: "Delete",
      showOkOnly: false,
      isShowCloseIcon: true
    };
    this.modelPopupService.open<DialogData>(ConfirmationDialogComponent, dialog).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        const request: any = {
          employeeId: dataItem.employeeId
        };
        this.employeesManagementService.deleteEmployee(request).subscribe((response) => {
          if (response.isSuccess) {
            this.appNotificationService.success(response.message);
            this.getAllEmployees();
          } else {
            this.appNotificationService.error(response.message);
          }
        });
      }
    });
  }

  public getAllDepartments(): void {
    this.employeesManagementService.getAllDepartments().subscribe((response) => {
      if (response.isSuccess) {
        this.departmentList = response.data;
        this.updatePaginatedData();
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  }

  public updateDepartment(dataItem): void {
    this.mydevelopmentSharedService.setMyDevDetails({
      departmentId: dataItem.departmentId,
      departmentName: dataItem.departmentName,
      managerName: dataItem.managerName,
      departmentCode: dataItem.departmentCode,
      extensionNumber: dataItem.extensionNumber,
    });
    this.router.navigate(['/myDevelopment/employeesManagement']);
  }

  public deleteDepartment(dataItem): void {
    const dialog: DialogData = {
      title: "Delete Department",
      message: "Are you sure you want to delete this department?",
      secondaryBtnTxt: "Cancel",
      dangerBtnTxt: "Delete",
      showOkOnly: false,
      isShowCloseIcon: true
    };
    this.modelPopupService.open<DialogData>(ConfirmationDialogComponent, dialog).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        const request: any = {
          departmentId: dataItem.departmentId
        };
        this.employeesManagementService.deleteDepartment(request).subscribe((response) => {
          if (response.isSuccess) {
            this.appNotificationService.success(response.message);
            this.getAllDepartments();
          } else {
            this.appNotificationService.error(response.message);
          }
        });
      }
    });
  }

  public viewAddEmployee(): void {
    this.router.navigate(['/myDevelopment/employeesManagement'], {
      queryParams: { isEmployee: true, isDepartment: false }
    });
  }

  public viewAddDepartment(): void {
    this.router.navigate(['/myDevelopment/employeesManagement'], {
      queryParams: { isEmployee: false, isDepartment: true }
    });
  }

  public onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  public onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  public updatePaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if (this.isEmployee && this.employeeList?.length) {
      this.employeeData = this.employeeList.slice(startIndex, endIndex);
    } else if (!this.isEmployee && this.departmentList?.length) {
      this.departmentData = this.departmentList.slice(startIndex, endIndex);
    }
  }

}
