import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppNotificationService } from '../../notifications/app-notification.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  
  @Output() sidebarToggled = new EventEmitter<boolean>();
  public menuStatus: boolean = true;
  public isMenuRequire: boolean = false;
  public isSidebarToggleActive: boolean = false;
  public fullName: string = '';
  public role: string = '';

  constructor(
    private router: Router,
    private appService: AppService,
    private appNotificationService: AppNotificationService
  ) { }

  ngOnInit(): void {
    this.appService.getFullNameFromStore().subscribe((name) => {
      this.fullName = name ?? '';
    });

    this.appService.getRoleFromStore().subscribe((role) => {
      this.role = role ?? '';
    });
  }

  public sidebarToggle(): void {
    this.menuStatus = !this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
    this.isSidebarToggleActive = !this.isSidebarToggleActive;
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.appNotificationService.success('User logged out successfully!');
    this.router.navigate(['/authentication/signin']);
  }

  public userList(): void {
    this.router.navigate(['/userlist']);
    this.isSidebarToggleActive = !this.isSidebarToggleActive;
  }

}
