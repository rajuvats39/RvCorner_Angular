import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss'],
    standalone: false
})
export class PipesComponent {
  toDate: Date = new Date();
  msg: string= 'Welcome to Angular';
  num: number= 9542.14554;
  per: number= .7414;
  cur: number= 175;

  data$: Observable<any>;
  
}
