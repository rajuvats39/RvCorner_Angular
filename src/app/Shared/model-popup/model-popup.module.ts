import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ConfirmationDialogComponent],
})
export class ModelPopupModule { }
