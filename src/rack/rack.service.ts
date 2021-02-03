import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product_db } from 'src/Product/product.entity';
import Store from 'src/store/store.entity';
import { getConnection, Repository } from 'typeorm';
import { RackEntity } from './rack.entity';

@Injectable()
export class RackService {
    constructor (@InjectRepository(RackEntity) private reackRepo: Repository<RackEntity>){}
    //  @InjectRepository(product_db) private prod: Repository<product_db>) {}

    showRackData(): Promise <RackEntity[]>{
        return this.reackRepo.find()
    }


    addData(rack: RackEntity){
        return this.reackRepo.save(rack)
    }
}
