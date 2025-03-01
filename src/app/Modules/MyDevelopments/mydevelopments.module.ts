import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydevelopmentsRoutingModule } from './mydevelopments-routing.module';
import { AddEditDataComponent } from './getdata/add-edit-data/add-edit-data.component';
import { GetDataComponent } from './getdata/getdata.component';
import { ToasterComponent } from './toaster/toaster.component';
import { FormsModule } from '@angular/forms';
import { MydevelopmentsComponent } from './mydevelopments.component';
import { ValidationModule } from '../../Shared/validation/validation.module';
import { StudentsCrudComponent } from './students-crud/students-crud.component';
import { StudentsAddEditDeleteComponent } from './students-crud/students-add-edit-delete/students-add-edit-delete.component';


@NgModule({
  declarations: [
    ToasterComponent,
    GetDataComponent,
    AddEditDataComponent,
    MydevelopmentsComponent,
    StudentsCrudComponent,
    StudentsAddEditDeleteComponent
  ],
  imports: [
    CommonModule,
    MydevelopmentsRoutingModule,
    ValidationModule,
    FormsModule
  ]
})
export class MydevelopmentsModule { }
