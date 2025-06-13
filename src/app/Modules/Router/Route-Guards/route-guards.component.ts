import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'app-route-guards',
    templateUrl: './route-guards.component.html',
    styleUrl: './route-guards.component.scss',
    standalone: false
})
export class RouteGuardsComponent {
  //1. Build the Guard as a Service
  //@Injectable()
  //export class ProductGuardService implements CanActivate {}

  // 2. Implement the Guard Method
  canActivate(): boolean {
    // Check weather the route can be activated;    
    return true;
    // or false if you want to cancel the navigation; 
  }

  //3. Register the Guard as Service in Module
  // providers: [ProductService,ProductGuardService]

  //4. Update the Routes
  // { path: 'product', component: ProductComponent, canActivate : [ProductGuardService] 
}

