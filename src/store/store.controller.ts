import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Store } from './store.entity';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor (private serviceStore: StoreService){}

    @Post()
    addProduct(@Body() store: Store) {
        return this.serviceStore.insertStore(store);
    }
 
    @Get()
    AllProduct(){
        return this.serviceStore.findAll()

    }

    @Get(':id')
    SingleProduct(@Param('id') storeid: string){
        return this.serviceStore.getSingleStore(storeid);
    }

    @Patch(':id')
    updateStore(@Param('id') storeid: string , @Body() store: Store )
    {
        return this.serviceStore.getUpdateStore(storeid, store); 
    }

    @Delete(':id')
    removeStore(@Param('id') storeid: string){
        return this.serviceStore.DeleteStore(storeid)
        
      
    }
}
