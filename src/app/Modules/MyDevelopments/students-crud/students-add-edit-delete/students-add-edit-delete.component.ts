import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentCrudService } from '../students-crud.service';
import { AppNotificationService } from '../../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-students-add-edit-delete',
  templateUrl: './students-add-edit-delete.component.html',
  styleUrl: './students-add-edit-delete.component.scss'
})
export class StudentsAddEditDeleteComponent {

  @Input() private dialogData: any;
  public id: number;
  public name: string;
  public age: number;
  public dob: string;
  public email: string;
  public mobile: string;
  public address: string;

  constructor(
    private readonly activeModal: NgbActiveModal,
    private studentCrudService: StudentCrudService,
    private appNotificationService: AppNotificationService,
  ) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.id = this.dialogData.id,
        this.name = this.dialogData.name,
        this.age = this.dialogData.age,
        this.dob = this.dialogData.dob,
        this.email = this.dialogData.email,
        this.mobile = this.dialogData.mobile,
        this.address = this.dialogData.address
    }
  }

  public createStudent(): void {
    const request: any = {
      name: this.name,
      age: +this.age,
      dob: this.dob,
      email: this.email,
      mobile: this.mobile,
      address: this.address
    };
    this.studentCrudService.createStudent(request).subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.activeModal.close({isClickOk:true});
      } else {
        this.appNotificationService.error(response.message);
      }
    })
  }

  public updateStudent(): void {
    const request: any = {
      id: this.dialogData.id,
      name: this.dialogData.name,
      age: this.dialogData.age,
      dob: this.dialogData.dob,
      email: this.dialogData.email,
      mobile: this.dialogData.mobile,
      address: this.dialogData.address
    };
    this.studentCrudService.createStudent(request).subscribe((response) => {
      if (response.isSuccess) {
        this.appNotificationService.success(response.message);
        this.activeModal.close(true);
      } else {
        this.appNotificationService.error(response.message);
      }
    });
  }

  public close(isConfirmed: boolean): void {
    this.activeModal.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

}
