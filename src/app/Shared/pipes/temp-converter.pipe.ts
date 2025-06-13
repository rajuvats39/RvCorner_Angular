import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempConverter',
    standalone: false
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, targetUnit: string): string {
    if (!value && value !== 0) {
      return '';
    }
    if (targetUnit === 'C') {
      const celsius = (value - 32) * 5 / 9;
      return `${celsius.toFixed(2)} °C`;
    } else if (targetUnit === 'F') {
      const fahrenheit = (value * 9 / 5) + 32;
      return `${fahrenheit.toFixed(2)} °F`;
    } else {
      return 'Invalid unit';
    }
  }

}
