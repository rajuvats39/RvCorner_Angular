import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.component.html',
  styleUrl: './add-edit-data.component.scss'
})
export class AddEditDataComponent {

  @Input() private dialogData: any;
  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public username: string;
  public website: string;
  public companyName: string;
  public address: string;
  public city: string;
  public zipCode: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.id = this.dialogData.id,
        this.name = this.dialogData.name,
        this.email = this.dialogData.email,
        this.phone = this.dialogData.phone,
        this.username = this.dialogData.username,
        this.website = this.dialogData.website,
        this.companyName = this.dialogData.companyName,
        this.address = this.dialogData.address,
        this.city = this.dialogData.city,
        this.zipCode = this.dialogData.zipCode
    }
  }

  public close(isConfirmed: boolean): void {
    this.activeModal.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

}
