import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'userlist', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
