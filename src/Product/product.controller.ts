import { Body, Controller, Get, Post, Param, Patch, Delete, Inject, CACHE_MANAGER, Session } from "@nestjs/common";
import { Cache } from "cache-manager";
import { product_db } from "./product.entity";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private service: ProductService, @Inject(CACHE_MANAGER) private cacheManager: Cache) { }

@Get('get-string-cache')
    async getSimpleString(){
        var value = await this.cacheManager.get('my-string');
        if (value){
            return {
                data: value,
                loadsFrom: 'redis cache'
            }
        }

        await this.cacheManager.set('my-string', this.fakeValue, {ttl:3000});
        return {
            data: this.fakeValue,
            loadsFrom: 'fake database'
        }
    }

    fakeValue(arg0: string, fakeValue: any, arg2: { ttl: number; }) {
        throw new Error("Method not implemented.");
    }
    
    @Post()
    addProduct(@Body() product: product_db) {
        return this.service.insertProduct(product)  
    }
 
    @Get()
    AllProduct(@Session() session: Record<string, any>){
        const visits = session.get('visits');
        session.set('visits', visits ? visits + 1 : 1);
        return this.service.getProducts();
    }

    @Get(':id')
    SingleProduct(@Param('id') prodId: string){
        return this.service.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string , @Body() product: product_db){
        return this.service.getUpdateProduct(prodId, product);
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.service.DeleteProduct(prodId);
        return prodId;
      
    }

}