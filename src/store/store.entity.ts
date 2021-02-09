import { type } from "os";
import { product_db } from "src/Product/product.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('Store')
export class Store extends BaseEntity {

    @PrimaryGeneratedColumn()
    storeid: number

    @Column()
    Employee: string

    // @ManyToOne(type => product_db, product_db => product_db.title, { cascade: true , onUpdate: "CASCADE", onDelete: "CASCADE"})
    // productdbnew: product_db[];
}


export default Store;
