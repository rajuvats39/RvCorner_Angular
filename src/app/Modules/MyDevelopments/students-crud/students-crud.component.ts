import { Component } from '@angular/core';
import { StudentsAddEditDeleteComponent } from './students-add-edit-delete/students-add-edit-delete.component';
import { DialogDataResponse } from '../../../Shared/model-popup/models/dialog-data-response.model';
import { ModelPopupService } from '../../../Shared/model-popup/model-popup.service';
import { StudentCrudService } from './students-crud.service';
import { AppNotificationService } from '../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-students-crud',
  templateUrl: './students-crud.component.html',
  styleUrl: './students-crud.component.scss'
})
export class StudentsCrudComponent {
  public studentList: any = [];
  public searchDetails: string;

  constructor(
    private studentCrudService: StudentCrudService,
    private modelPopupService: ModelPopupService,
    private appNotificationService: AppNotificationService,
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentCrudService.getStudents().subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.studentList = response.responseData;
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
      dob: dataItem.dob,
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

  public addStudent(): void {
    this.modelPopupService.open(StudentsAddEditDeleteComponent, null).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.getStudents();
      }
    });
  }

  public deleteStudent(dataItem): void {
    const request:any = {
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

}
