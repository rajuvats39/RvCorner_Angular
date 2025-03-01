import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';


@NgModule({
  declarations: [
    LifecycleHooksComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LifecycleHooksModule { }
