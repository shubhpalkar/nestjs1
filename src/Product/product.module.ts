import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
// import { ProductDB } from './product.entity';
import { product_db } from './product.entity';
import { ProductService } from './product.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [TypeOrmModule.forFeature([product_db]),
    CacheModule.register({
        store: redisStore,
        // host: 'localhost',
        // port: 5003
      })],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [TypeOrmModule]
})
export class ProductModule {}
