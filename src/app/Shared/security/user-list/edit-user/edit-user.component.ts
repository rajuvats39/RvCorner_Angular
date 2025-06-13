import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../authentication.service';
import { AppNotificationService } from '../../../notifications/app-notification.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.scss',
    standalone: false
})
export class EditUserComponent {
  @Input() private dialogData: any;
  public roleList: any = [];
  public roleData: any = [];
  public name: string;
  public id: string;
  public email: string;
  public role: string;
  public status: boolean;

  constructor(
    private activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService,
    private appNotificationService: AppNotificationService
  ) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.id = this.dialogData.id,
      this.name = this.dialogData.name,
      this.email = this.dialogData.email,
      this.role = this.dialogData.role,
      this.status = this.dialogData.status
    }
    this.getRoles();
  }

  public getRoles(): void {
    this.authenticationService.getAllRole().subscribe((response) => {
      this.roleList = response;
      this.roleData = response;
    })
  }

  public updateUser(): void {
    const request: any = {
      id: this.dialogData.id,
      name: this.dialogData.name,
      email: this.dialogData.email,
      role: this.dialogData.role,
      status: this.dialogData.status
    };
    this.authenticationService.updateUser(request).subscribe((response) => {
      if (response) {
        this.appNotificationService.success('User updated successfull !!');
        this.close(true);
      } else {
        this.appNotificationService.error('Somthing went wrong !!');
      }
    })
  }

  public close(isConfirmed: boolean): void {
    this.activeModal.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

}
