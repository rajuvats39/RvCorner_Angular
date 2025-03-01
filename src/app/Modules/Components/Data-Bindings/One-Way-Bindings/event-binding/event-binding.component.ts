import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  event: string = 'assets/images/one-way-event-binding.png';
  searchValue: string = '';
  showNotifications: boolean = false;

  public changeSearchValue(eventData: Event): void {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  public closeNotification(): void {
    this.showNotifications = true;
  }

}
