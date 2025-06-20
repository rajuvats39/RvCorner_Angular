import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateManagementRoutingModule } from './state-management-routing.module';
import { StateManagementComponent } from './state-management.component';
import { RxJsLibraryComponent } from './rx-js-library/rx-js-library.component';
import { NgRxLibraryComponent } from './ng-rx-library/ng-rx-library.component';


@NgModule({
  declarations: [
    StateManagementComponent,
    RxJsLibraryComponent,
    NgRxLibraryComponent
  ],
  imports: [
    CommonModule,
    StateManagementRoutingModule
  ]
})
export class StateManagementModule { }
