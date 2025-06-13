import { Component } from '@angular/core';
import { StudentsAddEditDeleteComponent } from './students-add-edit-delete/students-add-edit-delete.component';
import { DialogDataResponse } from '../../../Shared/model-popup/models/dialog-data-response.model';
import { ModelPopupService } from '../../../Shared/model-popup/model-popup.service';
import { StudentCrudService } from './students-list.service';
import { AppNotificationService } from '../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  standalone: false
})
export class StudentsListComponent {

  public studentList: any = [];
  public studentData: any[] = [];
  public currentPage: number = 1;
  public pageSize: number = 5;
  public filterText: string = '';

  constructor(
    private studentCrudService: StudentCrudService,
    private modelPopupService: ModelPopupService,
    private appNotificationService: AppNotificationService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentCrudService.getStudents().subscribe((response) => {
      if (response.isSuccess) {
        this.studentList = response.data;
        this.studentData = response.data;
        this.updatePaginatedData();
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  }

  public addEditStudent(dataItem): void {
    const dialogData = {
      id: dataItem.id,
      name: dataItem.name,
      age: dataItem.age,
      dob: this.formatDateForInput(dataItem.dob),
      email: dataItem.email,
      mobile: dataItem.mobile,
      address: dataItem.address
    };
    this.modelPopupService.open(StudentsAddEditDeleteComponent, dialogData).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.getStudents();
      }
    });
  }

  private formatDateForInput(dateString: string): string {
    return dateString ? dateString.split('T')[0] : '';
  }

  public addStudent(): void {
    this.modelPopupService.open(StudentsAddEditDeleteComponent, null).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.getStudents();
      }
    });
  }

  public deleteStudent(dataItem): void {
    const request: any = {
      id: dataItem.id
    };
    this.studentCrudService.deleteStudent(request).subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.getStudents();
      } else {
        this.appNotificationService.error(response.message);
      }
    })
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
    this.studentData = this.studentList.slice(startIndex, endIndex);
  }

  public applyFilter(key): void {
    this.studentData = this.studentList.filter(student =>
      student.name?.toLowerCase().includes(key.toLowerCase()) || student.email?.toLowerCase().includes(key.toLowerCase()) ||
      student.mobile?.toLowerCase().includes(key.toLowerCase()) || student.address?.toLowerCase().includes(key.toLowerCase())
    )
  }

}
