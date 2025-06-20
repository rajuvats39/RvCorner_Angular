import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { NgClassComponent } from './ngClass/ng-class.component';
import { NgForComponent } from './ngFor/ng-for.component';
import { NgIfComponent } from './ngIf/ng-if.component';
import { NgStyleComponent } from './ngStyle/ng-style.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { NgSwitchComponent } from './ngSwitch/ng-switch.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'ngFor', component: NgForComponent },
  { path: 'ngFor', component: NgForComponent },
  { path: 'trackBy', component: TrackbyComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngSwitch', component: NgSwitchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
