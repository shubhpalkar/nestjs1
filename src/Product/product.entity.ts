import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.model';

@Entity()
export class ProductDB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;
}