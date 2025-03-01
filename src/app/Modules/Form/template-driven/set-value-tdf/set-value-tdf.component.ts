import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-value-tdf',
  templateUrl: './set-value-tdf.component.html',
  styleUrls: ['./set-value-tdf.component.scss']
})
export class SetValueTDFComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  contact!: contact;
  countryList: country[] = [
    new country("1", "INDIA"),
    new country('2', 'USA'),
    new country('3', 'UK'),
    new country('4', 'Rasia')
  ];

  ngOnInit() {
    this.contact = {
      firstname: "Manvi",
      lastname: "Singh",
      email: "manvisingh@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Pune",
        street: "Marunji",
        pincode: "411057"
      }
    };

    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });

  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  setDefaults() {
    this.contactForm.setValue(this.contact);
  }

  changeCountry() {
    this.contactForm.controls["country"].setValue("2");
  }

  patchValue() {
    let patchRequest = {
      firstname: "Raju",
      lastname: "Vats",
      email: "rajuvats39@gmail.com",
    };
    this.contactForm.control.patchValue(patchRequest);
  }

  changeAddress() {
    let changeRequest = {
      city: "Patna",
      street: "Boring Road",
      pincode: "841439"
    };
    let address = this.contactForm.controls["address"] as FormGroup
    address.patchValue(changeRequest);
  }

  reset() {
    this.contactForm.reset();
  }

  resetForm() {
    this.contactForm.resetForm();
  }

}

export class contact {
  firstname!: string;
  lastname!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}

export class country {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}