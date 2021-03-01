import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';

@Entity()
export class Productos {
    
    @PrimaryGeneratedColumn()
    prodcutoId: number;

    @Column() 
    handle: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    sku: number;
    
    @Column()
    grams: number;
    
    @Column()
    stock: number;
    
    @Column()
    price: number;
    
    @Column()
    comparePrice: number;
    
    @Column()
    barCode: number;
    
}
