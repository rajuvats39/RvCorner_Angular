import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTPComponent } from './http.component';

const routes: Routes = [
  { path: '', component: HTTPComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTTPRoutingModule { }
