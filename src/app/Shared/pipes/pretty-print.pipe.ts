import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrint'
})
export class PrettyPrintPipe implements PipeTransform {

  public transform(value: any): string {
    return JSON.stringify(value, null, 2).replace(/ /g, '&nbsp;').replace(/\n/g, '<br/>');
  }

}
