import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppNotificationService {
  constructor(private toastrService: ToastrService) { }

  public success(message: string): void {
    this.toastrService.success(message);
  }

  public error(message: string): void {
    this.toastrService.error(message);
  }

  public info(message: string): void {
    this.toastrService.info(message);
  }

  public warning(message: string): void {
    this.toastrService.warning(message);
  }

}
