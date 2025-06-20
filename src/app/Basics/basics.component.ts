import { Component } from '@angular/core';

@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styleUrls: ['./basics.component.scss'],
    standalone: false
})
export class BasicsComponent {

  public openAngularGuide():void {
    const url = 'https://angular.dev/overview';
    window.open(url, '_blank');
  }

}
