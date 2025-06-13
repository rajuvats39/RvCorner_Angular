import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-if',
    templateUrl: './ng-if.component.html',
    styleUrls: ['./ng-if.component.scss'],
    standalone: false
})
export class NgIfComponent {
  title: string = 'ngIf Example' ;
  showMe: boolean | undefined;
}
