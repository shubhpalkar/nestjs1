import { type } from 'os';
import { Store } from 'src/store/store.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, TableForeignKey } from 'typeorm';
import { Product } from './product.model';

@Entity('product_db')
export class product_db {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column()
  price: number;

  
  @ManyToOne(() => Store, storen => storen.storeid)
  storen: Store

}

