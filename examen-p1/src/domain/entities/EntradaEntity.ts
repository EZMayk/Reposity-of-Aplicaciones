import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Usuario } from './UsuarioEntity';
import { Funcion } from './FuncionEntity';



@Entity()
export class Entrada {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Usuario, usuario => usuario.entradas)
    usuario!: Usuario;

    @ManyToOne(() => Funcion, funcion => funcion.entradas)
    funcion!: Funcion;

    @Column()
    estado!: string; // "activa", "cancelada", "usada"

@Column({ type: 'datetime' }) // compatible con SQLite
fechaCompra!: Date;
}
