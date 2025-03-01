import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponentsComponent } from './advanced-components.component';

const routes: Routes = [
  {path:'',component:AdvancedComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedComponentsRoutingModule { }
