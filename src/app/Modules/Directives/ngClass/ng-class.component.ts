import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.scss'],
    standalone: false
})
export class NgClassComponent {
  cssVar: string = 'primary big';
  cssArray = ['primary', 'big'];
  cssClass = {
    primary: true,
    big: true,
  };

  tasks = [
    { title: 'Complete project documentation', status: 'completed' },
    { title: 'Implement new features', status: 'in-progress' },
    { title: 'Fix bugs in the system', status: 'in-review' },
    { title: 'Write unit tests', status: 'rejected' },
    { title: 'Design new UI for dashboard', status: 'pending' }
  ];

  numbers = [30, 40, 50, 60, 70, 80];
  getClass(num: number) {
    if (num <= 50) return 'primary';
    else return 'secondary';
  }
}
