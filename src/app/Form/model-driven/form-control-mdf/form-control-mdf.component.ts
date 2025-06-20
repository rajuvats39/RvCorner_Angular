import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-control-mdf',
    templateUrl: './form-control-mdf.component.html',
    styleUrls: ['./form-control-mdf.component.scss'],
    standalone: false
})
export class FormControlMDFComponent {
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }

  public reset(): void {
    this.contactForm.reset();
  }

}

