import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';

@Injectable()
export class StoreService {

    constructor(@InjectRepository(Store) private storeRepository: Repository<Store>) { }
   

    insertStore(store: Store) {
        const newProduct = this.storeRepository.save(store);
        return newProduct;
    }


    getSingleStore(storeid: string) {
        const product = this.storeRepository.findOne({where: storeid})
        return { ...product };
    }


    getUpdateStore(storeid:string,store: Store) : Promise<any>{
        const checkID = this.storeRepository.findOne(storeid)
        
        if (!checkID) {
            throw new Error("User is not found......");
        }
        
        return this.storeRepository.update(storeid, store);
    }

    DeleteStore(storeid: string) {

        const data = this.storeRepository.findOne(storeid);

        if (!data){
            throw new Error("User is not found ....");
        }

        return this.storeRepository.delete(storeid);
    }

    

    findAll(): Promise<Store[]> {
        return this.storeRepository.find()
      }

}

