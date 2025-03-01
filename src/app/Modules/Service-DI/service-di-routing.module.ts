import { ServiceComponent } from './service/service.component';
import { ServiceDIComponent } from './service-di.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

const routes: Routes = [
  { path: '', component: ServiceDIComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'di', component: DependencyInjectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDIRoutingModule { }
