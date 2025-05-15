import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ConsultaAPI } from "./APIClima";

@Entity()
export class Clima {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("float")
    temperatura!: number;

    @Column("float")
    humedad!: number;

    @Column("float")
    viento!: number;

    @Column("timestamp")
    fecha!: Date;

    @Column()
    ubicacion!: string;

    @OneToMany(() => ConsultaAPI, consulta => consulta.clima)
    consultas!: ConsultaAPI[];
}
