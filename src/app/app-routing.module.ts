import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponentsModule } from './Advanced-Components/advanced-components.module';
import { BlogAppModule } from './BlogApp/blog-app.module';

import { AuthLayoutComponent } from './Shared/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Shared/layouts/main-layout/main-layout.component';
import { UserListComponent } from './Dashboard/user-list/user-list.component';
import { DashboardModule } from './Dashboard/dashboard.module';
import { BasicsModule } from './Basics/basics.module';
import { ComponentsModule } from './Components/components.module';
import { ComponentCommunicationsModule } from './Component-Communications/component-communications.module';
import { DirectivesModule } from './Directives/directives.module';
import { FormModule } from './Form/form.module';
import { HTTPRoutingModule } from './HTTP/http-routing.module';
import { InterviewQAModule } from './Interview-QA/interview-qa.module';
import { LifecycleHooksModule } from './Lifecycle-Hooks/lifecycle-hooks.module';
import { MydevelopmentsModule } from './MyDevelopments/mydevelopments.module';
import { PipeModule } from './Pipes/pipes.module';
import { RoutersModule } from './Router/routers.module';
import { ServiceDIModule } from './Service-DI/service-di.module';
import { StateManagementRoutingModule } from './State-Management/state-management-routing.module';
import { AuthGuard } from './Authentications/auth.guard';
import { AuthenticationModule } from './Authentications/authentication.module';
import { PageNotFoundComponent } from './Authentications/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      { path: 'userlist', component: UserListComponent },
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
      { path: 'blogApp', loadChildren: () => BlogAppModule }
    ]
  },
  { path: 'authentication', component: AuthLayoutComponent, loadChildren: () => AuthenticationModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
