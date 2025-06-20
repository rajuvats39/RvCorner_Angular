import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginationComponent],
  exports: [
    CommonModule,
    PaginationComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule,
    NgbModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule
  ]
})
export class SharedModule { }
