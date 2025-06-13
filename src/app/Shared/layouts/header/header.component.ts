import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements DoCheck {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  public menuStatus: boolean = false;
  public isMenuRequire: boolean = false;

  constructor(
    private router: Router
  ) { }


  public sidebarToggle(): void {
    this.menuStatus = !this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
  }

  public logout(): void {
    this.router.navigate(['/login']);
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl == '/login' || currentUrl == '/register') {
      this.isMenuRequire = false;
    } else {
      this.isMenuRequire = true;
    }
  }

  public user(): void {
    this.router.navigate(['/user'])
  }

}
