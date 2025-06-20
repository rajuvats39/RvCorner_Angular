import { Component } from '@angular/core';
import { ComponentCommunicationsService } from '../component-communications.service';

@Component({
    selector: 'app-sibling',
    templateUrl: './sibling.component.html',
    styleUrl: './sibling.component.scss',
    standalone: false
})
export class SiblingComponent {
  constructor(
    private componentCommunicationsService: ComponentCommunicationsService
  ) { }

  public sendData(): void {
    this.componentCommunicationsService.sendData('Hello i am from Child via Service');
  }
}
