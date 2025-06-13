import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    templateUrl: './ng-style.component.html',
    styleUrls: ['./ng-style.component.scss'],
    standalone: false
})
export class NgStyleComponent {
  color: string = 'red';
  status: string = 'error';
  IsBold: boolean = true;
  FontSize: number = 40;
  IsItalic: boolean = true;

  addCSSStyles() {
    let CssStyles = {
      'font-weight': this.IsBold ? 'bold' : 'normal',
      'font-style': this.IsItalic ? 'italic' : 'normal',
      'font-size.px': this.FontSize
    };
    return CssStyles;
  }

}
