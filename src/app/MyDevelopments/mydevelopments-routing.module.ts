import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './getdata/getdata.component';
import { ToasterComponent } from './toaster/toaster.component';
import { MydevelopmentsComponent } from './mydevelopments.component';
import { EmployeesManagementComponent } from './employees-management/employees-management.component';
import { EmployeesDepartmentsListComponent } from './employees-management/employees-departments-list/employees-departments-list';
import { StudentsListComponent } from './students-crud/students-list.component';

const routes: Routes = [
  { path: '', component: MydevelopmentsComponent },
  { path: 'toastrDemo', component: ToasterComponent },
  { path: 'getData', component: GetDataComponent },
  { path: 'studentsList', component: StudentsListComponent },
  { path: 'employeesManagement', component: EmployeesManagementComponent },
  { path: 'employeeDepartmentList', component: EmployeesDepartmentsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydevelopmentsRoutingModule {}
