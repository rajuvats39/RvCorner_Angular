import { Component, OnInit } from '@angular/core';
import { EmployeesManagementService } from './employees-management.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MydevelopmentSharedService } from '../mydevelopment-shared.service';
import { AppHttpClientService } from '../../Shared/app-http-client.service';
import { CommonUtilityService } from '../../Shared/common-utility.service';
import { AppNotificationService } from '../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-employees-management',
  standalone: false,
  templateUrl: './employees-management.component.html',
  styleUrl: './employees-management.component.scss',
})
export class EmployeesManagementComponent implements OnInit {
  public departmentList: any[] = [];
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public dateOfBirth: string;
  public joiningDate: string;
  public departmentId: number;
  public gender: string;
  public skills: string[] = [];
  public resumePath: any;
  public profileImage: File | string;
  public salary: number;
  public isActive: boolean;
  public experienceYears: number;
  public passwordHash: string;
  public bio: string;
  public skillsList = [{ skillName: 'C#' }, { skillName: 'SQL' }, { skillName: '.NET Core' }, { skillName: 'Angular' }, { skillName: 'React' }, { skillName: 'JavaScript' }];
  public employeesData: any;
  public isEditMode: boolean = false;
  public isEmployee: boolean = false;

  public departmentName: string;
  public departmentCode: string;
  public managerName: string;
  public extensionNumber: string;
  public departmentData: any;

  constructor(
    private readonly router: Router,
    private readonly commonUtilityService: CommonUtilityService,
    private readonly appNotificationService: AppNotificationService,
    private readonly mydevelopmentSharedService: MydevelopmentSharedService,
    private readonly employeesManagementService: EmployeesManagementService,
    private readonly httpClient: AppHttpClientService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (!this.employeesData) {
      this.getAllDepartments();
    }
    this.departmentData = this.mydevelopmentSharedService.getMyDevDetails();
    if (this.departmentData) {
      this.departmentName = this.departmentData.departmentName;
      this.departmentCode = this.departmentData.departmentCode;
      this.managerName = this.departmentData.managerName;
      this.extensionNumber = this.departmentData.extensionNumber;
    }
    this.employeesData = this.mydevelopmentSharedService.getMyDevDetails();
    if (this.employeesData) {
      this.isEditMode = true;
      this.firstName = this.employeesData.firstName;
      this.lastName = this.employeesData.lastName;
      this.email = this.employeesData.email;
      this.phoneNumber = this.employeesData.phoneNumber;
      this.dateOfBirth = this.formatDateForInput(this.employeesData.dateOfBirth);
      this.joiningDate = this.formatDateForInput(this.employeesData.joiningDate);
      this.departmentId = this.employeesData.departmentId;
      this.gender = this.employeesData.gender;
      this.skills = this.employeesData.skills ? this.employeesData.skills.split(',') : [];
      this.resumePath = this.employeesData.resumePath;
      this.profileImage = this.employeesData.profileImage;
      this.isActive = this.employeesData.isActive;
      this.salary = this.employeesData.salary;
      this.experienceYears = this.employeesData.experienceYears;
      this.passwordHash = this.employeesData.passwordHash;
      this.bio = this.employeesData.bio;
    }
    this.route.queryParams.subscribe(params => {
      this.isEmployee = params['isEmployee'] === 'true';
    });
  }

  private formatDateForInput(dateString: string): string {
    return dateString ? dateString.split('T')[0] : '';
  }

  public getAllDepartments(): void {
    this.employeesManagementService.getAllDepartments().subscribe((response) => {
      if (response.isSuccess) {
        this.departmentList = response.data;
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  }

  public onSkillChange(skill: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.skills = isChecked ? [...this.skills, skill].filter((s, i, arr) => arr.indexOf(s) === i) : this.skills.filter(s => s !== skill);
  }

  public onFileSelect(event: any) {
    this.resumePath = event.target.files[0];
  }

  public uploadFile(event: any) {
    if (!this.resumePath) {
      alert('Please select a file first!');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.resumePath);
    this.httpClient.post('https://localhost:5001/api/FileUpload', formData).subscribe((response) => {
      if (response) {
        this.appNotificationService.success("File uploaded successfully.");
        this.resumePath = response;
      } else {
        this.appNotificationService.error("File upload failed.");
      }
    });
  }

  public addUpdateEmployee(form: NgForm): void {
    if (form && !form.valid) {
      this.appNotificationService.error('Please fill in all required fields.');
      return;
    }
    const request: any = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      dateOfBirth: this.dateOfBirth,
      joiningDate: this.joiningDate,
      departmentId: this.departmentId,
      gender: this.gender,
      skills: this.skills.toString(),
      resumePath: this.resumePath ? this.resumePath.toString() : "/fakePath",
      profileImage: this.profileImage ? this.profileImage.toString() : "/fakePath",
      isActive: this.isActive,
      salary: this.salary,
      experienceYears: this.experienceYears,
      passwordHash: this.passwordHash,
      bio: this.bio,
    };
    if (this.isEditMode) {
      request.employeeId = this.employeesData.employeeId;
      this.employeesManagementService.updateEmployee(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          form.resetForm();
          this.viewEmployeeList();
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    } else {
      this.employeesManagementService.addEmployee(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          form.resetForm();
          // this.uploadFiles();
          this.viewEmployeeList();
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    }
  }

  public addUpdateDepartment(form: NgForm): void {
    if (form && !form.valid) {
      this.appNotificationService.error('Please fill in all required fields.');
      return;
    }
    const request: any = {
      departmentName: this.departmentName,
      departmentCode: this.departmentCode,
      managerName: this.managerName,
      extensionNumber: this.extensionNumber,
    };
    if (this.isEditMode) {
      request.departmentId = this.employeesData.departmentId;
      this.employeesManagementService.updateDepartment(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          form.resetForm();
          this.viewEmployeeList();
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    } else {
      this.employeesManagementService.addDepartment(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          form.resetForm();
          this.viewDepartmentList();
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    }
  }

  public resetForm(form: NgForm): void {
    form.resetForm();
    this.skills = [];
  }

  public viewEmployeeList(): void {
    this.router.navigate(['/myDevelopment/employeeDepartmentList'], {
      queryParams: { isEmployee: true },
    });
  }

  public viewDepartmentList(): void {
    this.router.navigate(['/myDevelopment/employeeDepartmentList'], {
      queryParams: { isDepartment: true },
    });
  }

}
