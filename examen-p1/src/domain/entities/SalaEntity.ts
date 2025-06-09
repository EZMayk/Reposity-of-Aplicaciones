import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Funcion } from './FuncionEntity';




@Entity()
export class Sala {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    nombre!: string;

    @Column()
    capacidad!: number;

    @Column()
    tipo!: string; // Ej: "2D", "3D", "VIP"

    @Column({ default: true })
    activa!: boolean;

    @OneToMany(() => Funcion, funcion => funcion.sala)
    funciones!: Funcion[];
}
