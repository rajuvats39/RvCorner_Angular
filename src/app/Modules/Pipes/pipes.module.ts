import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipes-routing.module';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PipesComponent } from './pipes.component';
import { PipesModule } from '../../Shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PipesComponent,
    CustomPipeComponent
  ],
  imports: [
    CommonModule,
    PipeRoutingModule,
    PipesModule,
    FormsModule
  ]
})
export class PipeModule { }
