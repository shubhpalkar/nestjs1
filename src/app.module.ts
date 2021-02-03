import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { ProductService } from './Product/product.service';
import {product_db} from "./Product/product.entity";
import { StoreModule } from './store/store.module';
import { RackModule } from './rack/rack.module';
// import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [TypeOrmModule.forRoot(),
      StoreModule,ProductModule, RackModule,
      // CacheModule.register({
      //   store: redisStore,
      //   // host: 'localhost',
      //   // port: 5003
      // })],
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection){}

  
}
