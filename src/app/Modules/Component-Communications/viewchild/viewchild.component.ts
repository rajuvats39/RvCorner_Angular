import { Component } from '@angular/core';

@Component({
    selector: 'app-viewchild',
    templateUrl: './viewchild.component.html',
    styleUrl: './viewchild.component.scss',
    standalone: false
})
export class ViewchildComponent {
 public message: string = 'Hello Parent i am calling u from ViewChild Component!';
  
  public greet() {
    return 'Hello Parent  greeting u from ViewChild Component! ';
  }

}
