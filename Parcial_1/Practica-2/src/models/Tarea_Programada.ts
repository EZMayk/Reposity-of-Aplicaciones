import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ConsultaAPI } from "./APIClima";

@Entity()
export class TareaProgramada {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    frecuencia_min!: number;

    @Column("timestamp")
    ultima_ejecucion!: Date;

    @OneToMany(() => ConsultaAPI, consulta => consulta.tarea)
    consultas!: ConsultaAPI[];
}
