import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Funcion } from './FuncionEntity';



@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    titulo!: string;

    @Column()
    sinopsis!: string;

    @Column()
    posterUrl!: string;

    @Column({ default: true })
    activa!: boolean;

    @OneToMany(() => Funcion, funcion => funcion.pelicula)
    funciones!: Funcion[];
}
