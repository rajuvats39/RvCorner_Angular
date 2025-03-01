import { PropertyBindingComponent } from './Data-Bindings/One-Way-Bindings/property-binding/property-binding.component';
import { InterpolationBindingComponent } from './Data-Bindings/One-Way-Bindings/interpolation-binding/interpolation-binding.component';
import { DataBindingsComponent } from './Data-Bindings/data-bindings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { TwoWayBindingComponent} from './Data-Bindings/Two-Way-Bindings/two-way-binding/two-way-binding.component';
import { EventBindingComponent} from './Data-Bindings/One-Way-Bindings/event-binding/event-binding.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'dataBindings', component: DataBindingsComponent },
  { path: 'interpolation', component: InterpolationBindingComponent },
  { path: 'propertyBinding', component: PropertyBindingComponent },
  { path: 'eventBinding', component: EventBindingComponent },
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
