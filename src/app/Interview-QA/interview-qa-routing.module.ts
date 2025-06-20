import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewQAComponent } from './interview-qa.component';

const routes: Routes = [
  { path: '', component: InterviewQAComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewQARoutingModule { }
