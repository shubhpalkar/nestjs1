import { Body, Controller, Get, Post } from '@nestjs/common';
import { RackEntity } from './rack.entity';
import { RackService } from './rack.service';

@Controller('rack')
export class RackController {
    constructor (private  rackService: RackService){}

    @Get()
    showRack(){
        return this.rackService.showRackData()
    }

    @Post()
    insertData(@Body() rack: RackEntity){
        return this.rackService.addData(rack)
    }
}
