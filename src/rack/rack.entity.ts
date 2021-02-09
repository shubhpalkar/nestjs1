import { create } from "domain";
import { type } from "os";
import { product_db } from "src/Product/product.entity";
import Store from "src/store/store.entity";
import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

@Entity('rack')
export class RackEntity {
    @PrimaryGeneratedColumn()
    rackid: number

    @Index()
    @ManyToOne(type => product_db, product => product.id, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    product: product_db;

    @Index()
    @ManyToOne(type => Store, storen => storen.storeid, {onDelete: "CASCADE", onUpdate: "CASCADE"} )
    storen: Store;

    @Index()
    @ManyToOne(type => product_db, productt => productt.title, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    productt: product_db;

}

