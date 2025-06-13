import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogData } from '../models/dialog-data.model';


@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrl: './confirmation-dialog.component.scss',
    standalone: false
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() dialogData: DialogData;
  public width = '850px';
  private defaultPrimaryBtnTxt = 'Ok';
  private defaultSecondaryBtnTxt = 'Cancel';
 // private defaultdangerBtnTxt = 'Delete';

  constructor(
    private dialog: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    if (!this.dialogData.primaryBtnTxt) {
      this.dialogData.primaryBtnTxt = this.defaultPrimaryBtnTxt;
    }
    if (!this.dialogData.secondaryBtnTxt) {
      this.dialogData.secondaryBtnTxt = this.defaultSecondaryBtnTxt;
    }
  }

  public close(isConfirmed: boolean): void {
    this.dialog.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

  public closeIcomClick(): void {
    this.dialog.close({
      isClickOk: false,
      isClickCancel: false,
      isClickCloseIcon: true
    })
  }

}