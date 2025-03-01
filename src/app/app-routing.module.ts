import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsModule } from './Modules/Basics/basics.module';
import { ComponentCommunicationsModule } from './Modules/Component-Communications/component-communications.module';
import { ComponentsModule } from './Modules/Components/components.module';
import { DashboardModule } from './Modules/Dashboard/dashboard.module';
import { DirectivesModule } from './Modules/Directives/directives.module';
import { FormModule } from './Modules/Form/form.module';
import { LifecycleHooksModule } from './Modules/Lifecycle-Hooks/lifecycle-hooks.module';
import { MydevelopmentsModule } from './Modules/MyDevelopments/mydevelopments.module';
import { PipeModule } from './Modules/Pipes/pipes.module';
import { HomeComponent } from './Shared/security/home/home.component';
import { PageNotFoundComponent } from './Shared/security/page-not-found/page-not-found.component';
import { UserListComponent } from './Shared/security/user-list/user-list.component';
import { UserLoginComponent } from './Shared/security/user-login/user-login.component';
import { UserRegisterComponent } from './Shared/security/user-register/user-register.component';
import { StateManagementRoutingModule } from './Modules/State-Management/state-management-routing.module';
import { ServiceDIModule } from './Modules/Service-DI/service-di.module';
import { RoutersModule } from './Modules/Router/routers.module';
import { HTTPRoutingModule } from './Modules/HTTP/http-routing.module';
import { AdvancedComponentsModule } from './Modules/Advanced-Components/advanced-components.module';
import { InterviewQAModule } from './Modules/Interview-QA/interview-qa.module';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'user', component: UserListComponent },
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: 'basics', loadChildren: () => BasicsModule },
  { path: 'components', loadChildren: () => ComponentsModule },
  { path: 'componentComm', loadChildren: () => ComponentCommunicationsModule },
  { path: 'directives', loadChildren: () => DirectivesModule },
  { path: 'form', loadChildren: () => FormModule },
  { path: 'lifecycleHooks', loadChildren: () => LifecycleHooksModule },
  { path: 'pipe', loadChildren: () => PipeModule },
  { path: 'stateManagement', loadChildren: () => StateManagementRoutingModule },
  { path: 'serviceDi', loadChildren: () => ServiceDIModule },
  { path: 'http', loadChildren: () => HTTPRoutingModule },
  { path: 'routers', loadChildren: () => RoutersModule },
  { path: 'advComponent', loadChildren: () => AdvancedComponentsModule },
  { path: 'myDevelopment', loadChildren: () => MydevelopmentsModule },
  { path: 'interviewQA', loadChildren: () => InterviewQAModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
