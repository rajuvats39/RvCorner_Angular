import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';


const routes: Routes = [
  { path: '', component: LifecycleHooksComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'sibling', component: SiblingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHooksRoutingModule { }
