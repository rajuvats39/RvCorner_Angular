import { SharedService } from './../../../Shared/shared.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-router',
    templateUrl: './router.component.html',
    styleUrl: './router.component.scss',
    standalone: false
})
export class RouterComponent {

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  public navigateToParent(dataItem): void {
    if (dataItem === 'queryParams') {
      this.router.navigate(['componentComm/parent'], { queryParams: { id: 123, name: 'Raju' } });
    } else if (dataItem === 'state') {
      this.router.navigateByUrl('componentComm/parent', { state: { id: 123, name: 'Raju' } });
    } else {
      this.sharedService.setData({
        name: 'Raju Kumar Singh',
        age: 29,
        position: 'Developer'
      });
      this.router.navigate(['componentComm/parent']);
    }
  }

}
