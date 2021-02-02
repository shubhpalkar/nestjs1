import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { title } from "process";
import Store from "src/store/store.entity";
import { getConnection, Repository } from "typeorm";
// import { ProductDB } from "./product.entity";
import { product_db } from "./product.entity";
import { Product } from "./product.model";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(product_db)
    private productRepository: Repository<product_db>,) { }


    insertProduct(product: product_db) {
       return this.productRepository.save(product);
    }

    getProducts(): Promise<product_db[]>{
        return this.productRepository.find()
    }

    getSingleProduct(prodId: string) {
        const product = this.productRepository.findOne(prodId)
        return { ...product };
    }


    async getUpdateProduct(prodId: string, product: product_db): Promise<any> {
        const checkdata = this.productRepository.findOne(prodId);
        console.log ('find value..', checkdata ) ;

        if (!checkdata) {
            throw new HttpException("ID not found", HttpStatus.NOT_FOUND);
            
        }
        await getConnection()
        .createQueryBuilder()
        .update(product_db)
        .set(product)
        .where({id: prodId})
        .execute();
    
        return product;
            

        
        
        // return this.productRepository.update(prodId, product);
    }

    async DeleteProduct(prodId: string) {

        const index = this.productRepository.findOne({where: prodId});

        if (!index){
            throw new HttpException("ID not found", HttpStatus.NOT_FOUND);
            
        }

       this.productRepository.delete(prodId)
       return HttpStatus.OK
    }

    

    findAll(): Promise<product_db[]> {
        return this.productRepository.find();
      }

}