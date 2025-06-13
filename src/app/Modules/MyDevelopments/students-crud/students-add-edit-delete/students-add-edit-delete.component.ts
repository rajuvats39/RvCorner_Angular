import { NgForm } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentCrudService } from '../students-list.service';
import { AppNotificationService } from '../../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-students-add-edit-delete',
  templateUrl: './students-add-edit-delete.component.html',
  styleUrl: './students-add-edit-delete.component.scss',
  standalone: false
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
  public isEditMode: boolean = false;

  constructor(
    private readonly activeModal: NgbActiveModal,
    private studentCrudService: StudentCrudService,
    private appNotificationService: AppNotificationService,
  ) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.isEditMode = true,
        this.id = this.dialogData.id,
        this.name = this.dialogData.name,
        this.age = this.dialogData.age,
        this.dob = this.dialogData.dob,
        this.email = this.dialogData.email,
        this.mobile = this.dialogData.mobile,
        this.address = this.dialogData.address
    }
  }



  public addUpdateStudent(form: NgForm): void {
    if (form && !form.valid) {
      this.appNotificationService.error('Please fill in all required fields.');
      return;
    }
    const request: any = {
      name: this.name,
      age: +this.age,
      dob: this.dob,
      email: this.email,
      mobile: this.mobile,
      address: this.address
    };
    if (this.isEditMode) {
      request.id = this.dialogData.id;
      this.studentCrudService.updateStudent(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          this.activeModal.close({ isClickOk: true });
        } else {
          this.appNotificationService.error(response.message);
        }
      })
    } else {
      this.studentCrudService.addStudent(request).subscribe((response) => {
        if (response.isSuccess) {
          this.appNotificationService.success(response.message);
          this.activeModal.close({ isClickOk: true });
        } else {
          this.appNotificationService.error(response.message);
        }
      });
    }
  }

  public close(isConfirmed: boolean): void {
    this.activeModal.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

}
