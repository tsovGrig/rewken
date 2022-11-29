import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investor')
export class Investor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    organization: string;

    @Column()
    email: string;

    @Column()
    phone:string;

}