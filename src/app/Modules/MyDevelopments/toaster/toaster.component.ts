import { Component } from '@angular/core';
import { AppNotificationService } from '../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  constructor(
    private appNotificationService: AppNotificationService
  ) { }

  success() {
    this.appNotificationService.success("Data shown successfully !!");
  }

  error() {
    this.appNotificationService.error("Something is wrong");
  }

  info() {
    this.appNotificationService.info("This is info")
  }

  warning() {
    this.appNotificationService.warning("This is warning")
  }
}