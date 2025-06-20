import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-pipe',
    templateUrl: './custom-pipe.component.html',
    styleUrls: ['./custom-pipe.component.scss'],
    standalone: false
})
export class CustomPipeComponent {
  celcius: number;
  Fahrenheit: number;
}
