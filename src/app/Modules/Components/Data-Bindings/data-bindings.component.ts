import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.scss']
})
export class DataBindingsComponent {
  interpolation = 'assets/images/one-way-interpolation.png';
  event: string = 'assets/images/one-way-event.png';
  twoway: string = 'assets/images/two-way-binding.png';
}
