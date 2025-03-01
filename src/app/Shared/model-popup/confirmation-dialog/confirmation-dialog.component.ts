import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogData } from '../models/dialog-data.model';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() dialogData: DialogData;
  public width = '850px';
  private defaultPrimaryBtnTxt = 'Ok';
  private defaultSecondaryBtnTxt = 'Cancel';
  private defaultdangerBtnTxt = 'Delete';

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    if (!this.dialogData.primaryBtnTxt) {
      this.dialogData.primaryBtnTxt = this.defaultPrimaryBtnTxt;
    }
    if (!this.dialogData.secondaryBtnTxt) {
      this.dialogData.secondaryBtnTxt = this.defaultSecondaryBtnTxt;
    }
    if (!this.dialogData.dangerBtnTxt) {
      this.dialogData.dangerBtnTxt = this.defaultdangerBtnTxt;
    }
  }

  public close(isConfirmed: boolean): void {
    this.activeModal.close({
      isClickOk: isConfirmed,
      isClickCancel: !isConfirmed,
      isClickCloseIcon: true
    })
  }

  public closeIcomClick(): void {
    this.activeModal.close({
      isClickOk: false,
      isClickCancel: false,
      isClickCloseIcon: true
    })
  }

}