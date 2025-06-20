import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationsComponent } from './component-communications.component'
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RouterComponent } from './router/router.component';

const routes: Routes = [
  { path: '', component: ComponentCommunicationsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'sibling', component: SiblingComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'router', component: RouterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationsRoutingModule { }
