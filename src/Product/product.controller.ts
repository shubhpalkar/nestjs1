import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private service: ProductService) { }

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
        ) {
        const generatedId = this.service.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id : generatedId};
    }
 
    @Get()
    AllProduct(){
        return this.service.getProducts();

    }

    @Get(':id')
    SingleProduct(@Param('id') prodId: string){
        return this.service.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string , @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number){
        this.service.getUpdateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return prodTitle;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.service.DeleteProduct(prodId);
        return prodId;
      
    }

}