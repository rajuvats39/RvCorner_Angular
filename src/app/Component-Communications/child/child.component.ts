import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    standalone: false
})
export class ChildComponent {
  @Input() receivedData: string; // Property to receive data from parent
  @Input() person: { name: string; age: number }; // Property to receive an object
  @Input() items: string[]; // Property to receive an array
  @Input('name') aliasName: string; // The property alias
  @Input() receivedinputData: string;
  @Input() data: string; // Property receiving data


  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Data changed:', changes['data'].currentValue);
    }
  }

  // @Input  Property receiving data
  @Output() dataToParent = new EventEmitter<string>(); // Property sending data

  public sendData(): void {
    const data = 'Hello Parent I am calling u from Child Component!';
    this.dataToParent.emit(data);
  }

}
