import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './getdata/getdata.component';
import { ToasterComponent } from './toaster/toaster.component';
import { MydevelopmentsComponent } from './mydevelopments.component';
import { StudentsCrudComponent } from './students-crud/students-crud.component';

const routes: Routes = [
  { path: '', component: MydevelopmentsComponent },
  { path: 'toastrDemo', component: ToasterComponent },
  { path: 'getData', component: GetDataComponent },
  { path: 'students-crud', component: StudentsCrudComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydevelopmentsRoutingModule { }
