import { type } from 'os';
import { Store } from 'src/store/store.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, TableForeignKey, OneToMany } from 'typeorm';
import { Product } from './product.model';

@Entity('productD')
export class product_db {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column()
  price: number;

  
  @OneToMany(() => Store, storen => storen.Employee)
  storeE: Store;

}

