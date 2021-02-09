import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { product_db } from 'src/Product/product.entity';
import Store from 'src/store/store.entity';
import { createQueryBuilder, getConnection, getManager, getRepository, Repository } from 'typeorm';
import { RackEntity } from './rack.entity';

@Injectable()
export class RackService {
    constructor(@InjectRepository(RackEntity) private reackRepo: Repository<RackEntity>,
        @InjectRepository(product_db) private prod: Repository<product_db>,
        @InjectRepository(Store) private storeRepo: Repository<Store>) { }

    async showRackData( ): Promise<any> {

        // return this.reackRepo.find()

        // const sqlQuery = await getRepository(RackEntity).createQueryBuilder('r1')
        //     .addSelect(['prod.id'])
        //     .leftJoin(product_db, 'prod', 'storeRepo.storeid = prod.id')
        //     .leftJoin(Store, 'st', 'st.storeid = r1.storen.storeid')
        //     // .where('prod.id=product.id AND store.storeid=rack.storenStoreId AND rack.rackid = id')
        //     .where({"rackid": id})
        //     .getMany();

        // return sqlQuery;

        // const thing = await createQueryBuilder('product_db')
        //     .innerJoin('product_db.id', 'storeid')
        //     .where('store.storeid = :storeid', { storeid: stid })
        //     .andWhere('productd.id = store.storeid').getMany();

        // const thing =  createQueryBuilder('product_db','RackEntity').
        //     where('RackEntity.productId = product_db.id').getMany();

       const prodthing = createQueryBuilder("product_db") .where("product_db.id = :id", { id: 5 })
    //    const rackthing = createQueryBuilder("RackEntity") .where("RackEntity.rackid = :rackid", { rackid: 11 })
       const rackthing = createQueryBuilder("RackEntity") .where("RackEntity.productId = :productId", { productId: 2 })
       const rackthing1 = createQueryBuilder("RackEntity") .where("RackEntity.productId = RackEntity.rackid")

    
       
    //    if (this.prod.getId == RackEntity.productId){
    //        return prodthing;
    //    }else{
    //        throw new Error("Id is not found in both table");
    //    }

        // var t1 = Date.now()
        // console.log("show Current time is -:", t1)
        
        // console.log ("rack output", rackthing.getRawOne);
        // console.log ("product output", prodthing.getRawOne());
        // // return prodthing.getRawOne()
        // return rackthing.getRawOne();
    }


    addData(rack: RackEntity) {
        return this.reackRepo.save(rack)
    }

    removeData(rackId) {
        const user = this.reackRepo.find(rackId)

        if (!user) {
            throw new HttpException("Rack id is not found...", HttpStatus.NOT_FOUND);
        }
        var t1 = Date.now()
        console.log("current time is ...", t1)
        console.log("User Deleted ...")
        this.reackRepo.delete(rackId);
        HttpStatus.OK
        var t2 = Date.now()
        console.log("End time is ...", t2)
    }
}


