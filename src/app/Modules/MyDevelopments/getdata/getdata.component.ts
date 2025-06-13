import { Component, OnInit } from '@angular/core';
import { MydevelopmentService } from '../mydevelopment.service';
import { AppNotificationService } from '../../../Shared/notifications/app-notification.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss'],
  standalone: false
})
export class GetDataComponent implements OnInit {

  public userData: any = [];
  public userList: any = [];
  public currentPage: number = 1;
  public pageSize: number = 5;
  public searchDetails: string;

  constructor(
    private readonly mydevelopmentService: MydevelopmentService,
    private readonly appNotificationService: AppNotificationService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData(): void {
    this.mydevelopmentService.getUserData().subscribe((data: any) => {
      if (data) {
        this.userData = data;
        this.userList = data;
        this.updatePaginatedData();
      } else {
        this.appNotificationService.error("No data found");
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
    this.userData = this.userList.slice(startIndex, endIndex);
  }

}
