import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-component-communications',
    templateUrl: './component-communications.component.html',
    styleUrl: './component-communications.component.scss',
    standalone: false
})
export class ComponentCommunicationsComponent {

  constructor(
    private router: Router
  ) { }

  public viewComponentOnAction(dataItem): void {
    switch (dataItem) {
      case 'parent':
        this.router.navigate(['/componentComm/parent']);
        break
      case 'child':
        this.router.navigate(['/componentComm/child']);
        break
      case 'sibling':
        this.router.navigate(['/componentComm/sibling']);
        break
      case 'viewchild':
        this.router.navigate(['/componentComm/viewchild']);
        break
      case 'router':
        this.router.navigate(['/componentComm/router']);
        break
    }
  }

}
