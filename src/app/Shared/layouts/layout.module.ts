import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../../Modules/Dashboard/dashboard.component';
import { PageLoadingSpinnerComponent } from '../page-loading-spinner/page-loading-spinner.component';
import { SecurityModule } from '../security/security.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ValidationModule } from '../validation/validation.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageLoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SecurityModule,
    FormsModule,
    ValidationModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
