import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ModelPopupModule } from './Shared/model-popup/model-popup.module';
import { AppNotificationModule } from './Shared/notifications/app-notification.module';
import { AuthLayoutComponent } from './Shared/layouts/auth-layout/auth-layout.component';
import { FooterComponent } from './Shared/layouts/footer/footer.component';
import { HeaderComponent } from './Shared/layouts/header/header.component';
import { MainLayoutComponent } from './Shared/layouts/main-layout/main-layout.component';
import { SidebarComponent } from './Shared/layouts/sidebar/sidebar.component';
import { PageLoaderComponent } from './Shared/layouts/page-loader/page-loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './Authentications/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppNotificationModule,
    ModelPopupModule,
    NgxSpinnerModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      // closeButton: true,
      easing: 'ease-in',
      easeTime: 300
    }),
  ],
  providers: [provideHttpClient(),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
