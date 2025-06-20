import { Component } from '@angular/core';
class item { name: string; val: number; }

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.scss'],
    standalone: false
})
export class NgSwitchComponent {
  public num: number = 0;

  items: any[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
    { name: 'Four', val: 3 },
    { name: 'Five', val: 3 }];
  selectedValue1: string = 'One';
  selectedValue2: string = 'One';
  selectedValue3: string = 'One';
  selectedValue4: string = 'One';
}
