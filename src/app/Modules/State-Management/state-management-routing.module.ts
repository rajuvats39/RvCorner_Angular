import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateManagementComponent } from './state-management.component';
import { RxJsLibraryComponent } from './rx-js-library/rx-js-library.component';
import { NgRxLibraryComponent } from './ng-rx-library/ng-rx-library.component';

const routes: Routes = [
  { path: '', component: StateManagementComponent },
  { path: 'rxjs', component: RxJsLibraryComponent },
  { path: 'ngrx', component: NgRxLibraryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateManagementRoutingModule { }
