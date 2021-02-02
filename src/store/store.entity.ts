import { type } from "os";
import { product_db } from "src/Product/product.entity";
import { BaseEntity, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('Store')
export class Store extends BaseEntity {

    @PrimaryGeneratedColumn()
    storeid: number

    @Column()
    list: string

    @Column()
    Employee: string

    @OneToMany(type => product_db, product_db => product_db.id, { cascade: true })
    @JoinTable({
        name: 'store_order',
        joinColumn: { name: 'productid', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'storeid', referencedColumnName: 'storeid' },
    })
    productdbnew: product_db[];
}


export default Store;
