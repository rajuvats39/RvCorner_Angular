import { Component } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.scss'],
    standalone: false
})
export class PropertyBindingComponent {
 public property: string = '/assets/images/one-way-property-binding.png';
 public isDisabled = true;
}
