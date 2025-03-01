import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDIRoutingModule } from './service-di-routing.module';
import { ServiceDIComponent } from './service-di.component';
import { ServiceComponent } from './service/service.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    ServiceDIComponent,
    ServiceComponent,
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    ServiceDIRoutingModule
  ],
  providers: [ProductService] //register the dependencies with the provider.
})
export class ServiceDIModule { }
