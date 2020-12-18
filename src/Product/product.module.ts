import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductDB } from './product.entity';
import { ProductService } from './product.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductDB])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [TypeOrmModule]
})
export class ProductModule {}
