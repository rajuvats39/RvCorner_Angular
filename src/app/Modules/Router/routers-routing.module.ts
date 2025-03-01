import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutersComponent } from './routers.component';
import { RouteGuardsComponent } from './Route-Guards/route-guards.component';

const routes: Routes = [
  { path: '', component: RoutersComponent },
  { path: 'routeGuards', component: RouteGuardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
