import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  public transform(value: number): string {
    const suffix = value < 1024 ? 'KB' : 'MB';
    const convertedValue = value < 1024 ? value : (value / 1024).toFixed(2);
    return `${convertedValue}${suffix}`;
  }

}
