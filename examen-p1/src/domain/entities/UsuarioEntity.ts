import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entrada } from './EntradaEntity';


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    nombre!: string;

    @Column({ unique: true })
    correo!: string;

    @Column()
    contraseña!: string;

    @Column({ default: 'cliente' }) // 'admin' o 'cliente'
    rol!: string;

    @OneToMany(() => Entrada, entrada => entrada.usuario)
    entradas!: Entrada[];
}
