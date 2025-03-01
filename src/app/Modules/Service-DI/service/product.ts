export class Product {
    constructor(productId: number, name: string, price: number, type: string) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.type = type;
    }

    productId: number;
    name: string;
    price: number;
    type: string;

}
