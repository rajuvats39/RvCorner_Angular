import { LayoutModule } from './Shared/layouts/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { ModelPopupModule } from './Shared/model-popup/model-popup.module';
import { AppNotificationModule } from './Shared/notifications/app-notification.module';
import { StateManagementComponent } from './Modules/State-Management/state-management.component';
import { AdvancedComponentsComponent } from './Modules/Advanced-Components/advanced-components.component';
import { InterviewQAComponent } from './Modules/Interview-QA/interview-qa.component';


@NgModule({
  declarations: [
    AppComponent,
    StateManagementComponent,
    AdvancedComponentsComponent,
    InterviewQAComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    AppNotificationModule,
    ModelPopupModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
    }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
