import { Body, Controller, Get, Post, Param, Patch, Delete, Inject, } from "@nestjs/common";
import { Cache } from "cache-manager";
import { product_db } from "./product.entity";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {

    constructor(private service: ProductService) { }


    @Post()
    addProduct(@Body() product: product_db) {
        return this.service.insertProduct(product)
    }



    @Get()
    AllProduct() {
        return this.service.getProducts()
    }

    @Get(':id')
    SingleProduct(@Param('id') prodId: string) {
        return this.service.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body() product: product_db) {
        return this.service.getUpdateProduct(prodId, product);
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string) {
        this.service.DeleteProduct(prodId);
        return prodId;

    }

}