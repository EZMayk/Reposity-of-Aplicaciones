import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Pelicula } from './PeliculaEntity';
import { Sala } from './SalaEntity';
import { Entrada } from './EntradaEntity';




@Entity()
export class Funcion {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Pelicula, pelicula => pelicula.funciones)
    pelicula!: Pelicula;

    @ManyToOne(() => Sala, sala => sala.funciones)
    sala!: Sala;

    @Column({ type: 'datetime' }) // o 'text'
    fechaHora!: Date;

    @Column()
    entradasDisponibles!: number;

    @Column({ default: true })
    activa!: boolean;

    @OneToMany(() => Entrada, entrada => entrada.funcion)
    entradas!: Entrada[];
}
