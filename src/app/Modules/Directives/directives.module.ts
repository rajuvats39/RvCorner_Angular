import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { NgClassComponent } from './ngClass/ng-class.component';
import { NgForComponent } from './ngFor/ng-for.component';
import { NgIfComponent } from './ngIf/ng-if.component';
import { NgStyleComponent } from './ngStyle/ng-style.component';
import { NgSwitchComponent } from './ngSwitch/ng-switch.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassComponent,
    NgForComponent,
    NgIfComponent,
    NgStyleComponent,
    NgSwitchComponent,
    TrackbyComponent,
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DirectivesModule { }
