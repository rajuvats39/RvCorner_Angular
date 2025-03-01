import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserNotificationComponent } from './user-notification/user-notification.component';

@NgModule({
  declarations: [UserNotificationComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserNotificationComponent]
})
export class AppNotificationModule { }
