import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
 public products: Product[];
 public productService;

  constructor() {
    this.productService = new ProductService(); //Asking for Dependency in the Constructor
  }

  public getProducts(): void {
    this.products = this.productService.getProducts();
  }

}
