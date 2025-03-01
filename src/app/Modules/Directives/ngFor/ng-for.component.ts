import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  items: any = [{
    id: "01 ",
    name: "Raju ",
    gender: "Mame ",
    job: "Developer ",
    address: "Siwan",
    pic:'assets/images/01.jpg'
  },
  {
    id: "02 ",
    name: "Manvi ",
    gender: "Female",
    job: "Kid ",
    address: "Chhapra",
    pic:'assets/images/02.jpg'
  },
  {
    id: "03 ",
    name: "Pooja ",
    gender: "Female ",
    job: "House ",
    address: "Patna",
    pic:'assets/images/03.jpg'
  }]
}
