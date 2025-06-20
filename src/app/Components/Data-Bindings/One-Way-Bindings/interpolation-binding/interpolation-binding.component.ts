import { Component } from '@angular/core';

@Component({
    selector: 'app-interpolation-binding',
    templateUrl: './interpolation-binding.component.html',
    styleUrls: ['./interpolation-binding.component.scss'],
    standalone: false
})
export class InterpolationBindingComponent {
 public interpolation: string = 'assets/images/one-way-interpolation.png';
 public pageHeader: string = 'Employee Details';
 public firstName: string = 'Raju ';
 public middleName: string = 'Kumar ';
 public lastName: string = 'Singh';
 public title: string = 'Welcome to One-Way Binding Example!';
  
  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
