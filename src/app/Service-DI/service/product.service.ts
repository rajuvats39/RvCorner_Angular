import { Product } from './product'

export class ProductService {

    public getProducts() {
        let products: Product[];
        products = [
            new Product(1, 'Memory Card', 500,'Electronics'),
            new Product(1, 'Pen Drive', 750,'Electronics'),
            new Product(1, 'Power Bank', 100,'Electronics'),
        ]
        return products;
    }
}
