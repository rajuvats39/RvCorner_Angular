import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationsRoutingModule } from './component-communications-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RouterComponent } from './router/router.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    ViewchildComponent,
    RouterComponent,
  ],
  imports: [
    CommonModule,
    ComponentCommunicationsRoutingModule,
    FormsModule
  ]
})
export class ComponentCommunicationsModule { }
