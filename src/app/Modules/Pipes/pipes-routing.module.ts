import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PipesComponent } from './pipes.component';

const routes: Routes = [
  { path: '', component: PipesComponent },
  { path: 'customPipe', component: CustomPipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
