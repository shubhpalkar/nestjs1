import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RackEntity } from './rack.entity';
import { RackService } from './rack.service';

@Controller('rack')
export class RackController {
    constructor (private  rackService: RackService){}

    @Get()
    // showRack(@Param ('stid') stid: string){
    showRack(){
        return this.rackService.showRackData( )
    }

    // @Get()
    // showRackAll(){
    //     return this.rackService.showRackDataAll()
    // }

    @Post()
    insertData(@Body() rack: RackEntity){
        return this.rackService.addData(rack)
    }

    @Delete(':id')
    removeProduct(@Param('id') rackId: string){
        return this.rackService.removeData(rackId)

    }
}
