import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Clima } from "./Clima";
import { TareaProgramada } from "./Tarea_Programada"

@Entity()
export class ConsultaAPI {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("timestamp")
    realizada_en!: Date;

    @ManyToOne(() => TareaProgramada, tarea => tarea.consultas)
    tarea!: TareaProgramada;

    @ManyToOne(() => Clima, clima => clima.consultas)
    clima!: Clima;
}
