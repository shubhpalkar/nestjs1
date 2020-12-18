import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { title } from "process";
import { Repository } from "typeorm";
import { ProductDB } from "./product.entity";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductDB)
    private productRepository: Repository<ProductDB>,) { }

    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.round(Math.random() * 10).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        //  return title;
        return newProduct;

    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(prodId: string) {
        const product = this.findProduct(prodId)[0];
        return { ...product };

    }


    getUpdateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number) {
        const [product, index] = this.findProduct(prodId);
        const updatedProduct = { ...product };
        if (prodTitle) {
            updatedProduct.title = prodTitle;
            console.log("title found");
        }
        if (prodDesc) {
            updatedProduct.description = prodDesc;
            console.log("description found");
        }
        if (prodPrice) {
            updatedProduct.price = prodPrice;
            console.log("price found");
        }
        this.products[index] = updatedProduct;

    }

    DeleteProduct(prodId: string) {

        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return [product, productIndex];
    }

}