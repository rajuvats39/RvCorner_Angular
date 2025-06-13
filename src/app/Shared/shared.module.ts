import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
