import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydevelopmentsRoutingModule } from './mydevelopments-routing.module';
import { GetDataComponent } from './getdata/getdata.component';
import { ToasterComponent } from './toaster/toaster.component';
import { FormsModule } from '@angular/forms';
import { MydevelopmentsComponent } from './mydevelopments.component';
import { StudentsAddEditDeleteComponent } from './students-crud/students-add-edit-delete/students-add-edit-delete.component';
import { EmployeesManagementComponent } from './employees-management/employees-management.component';
import { EmployeesDepartmentsListComponent } from './employees-management/employees-departments-list/employees-departments-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsListComponent } from './students-crud/students-list.component';
import { ValidationModule } from '../Shared/validation/validation.module';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    ToasterComponent,
    GetDataComponent,
    MydevelopmentsComponent,
    StudentsListComponent,
    StudentsAddEditDeleteComponent,
    EmployeesManagementComponent,
    EmployeesDepartmentsListComponent
  ],
  imports: [
    CommonModule,
    MydevelopmentsRoutingModule,
    ValidationModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class MydevelopmentsModule { }
