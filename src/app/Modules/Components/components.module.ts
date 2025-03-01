import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsComponent } from './components.component';
import { EventBindingComponent } from './Data-Bindings/One-Way-Bindings/event-binding/event-binding.component';
import { InterpolationBindingComponent } from './Data-Bindings/One-Way-Bindings/interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './Data-Bindings/One-Way-Bindings/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './Data-Bindings/Two-Way-Bindings/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
