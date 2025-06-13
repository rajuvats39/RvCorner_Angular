import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { country } from './set-value-tdf/set-value-tdf.component';
import { ConfirmationDialogComponent } from '../../../Shared/model-popup/confirmation-dialog/confirmation-dialog.component';

import { ModelPopupService } from '../../../Shared/model-popup/model-popup.service';
import { DialogDataResponse } from '../../../Shared/model-popup/models/dialog-data-response.model';
import { AppNotificationService } from '../../../Shared/notifications/app-notification.service';
import { DialogData } from '../../../Shared/model-popup/models/dialog-data.model';


@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.scss'],
    standalone: false
})
export class TemplateDrivenComponent {

  public firstName: string ='Raju Kumr Singh';
  public lastName: string;
  public email: string;
  public message: string;
  public country: string;
  public geneder: string;
  public isMarried: boolean;

  countryList: any = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor(
    private modelPopupService: ModelPopupService,
    private appNotificationService: AppNotificationService
  ) { };

  public confirmDialog(): void {
    const dialogData: DialogData = {
      title: 'ABC',
      message: 'I AM',
      primaryBtnTxt: 'Yes',
      secondaryBtnTxt: 'Cancel',
      dangerBtnTxt: 'Delete',
      isShowCloseIcon: true,
    };
    this.modelPopupService.open(ConfirmationDialogComponent, dialogData,).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.appNotificationService.success('Data saved successfully !!');
      } else {
        this.appNotificationService.error('Something is wrong');
      }
    });
  }

  public onSubmit(form: NgForm): void {
    if (form && !form.valid) {
      return;
    }
    console.log('Foem Value', form.value);
    form.resetForm();
  }

  public reset(form: NgForm): void {
    form.resetForm();
  }

}
