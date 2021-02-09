import { Module } from '@nestjs/common';
import { RackService } from './rack.service';
import { RackController } from './rack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RackEntity} from './rack.entity'
import { ProductModule } from 'src/Product/product.module';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [TypeOrmModule.forFeature([RackEntity]), ProductModule, StoreModule],
  providers: [RackService],
  controllers: [RackController]

})
export class RackModule {}
